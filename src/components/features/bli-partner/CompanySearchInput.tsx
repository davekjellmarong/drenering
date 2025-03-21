"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Search, Loader2 } from "lucide-react";
import { Company } from "@/src/utils/types";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";

interface CompanySearchInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCompanySelect: (company: Company) => void;
  error?: string;
  placeholder?: string;
}

export default function CompanySearchInput({
  id,
  label,
  value,
  onChange,
  onCompanySelect,
  error,
  placeholder = "Søk med firmanavn eller org.nr",
}: CompanySearchInputProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<Company[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchResultsRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the search results dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Update search query when input value changes
  useEffect(() => {
    setSearchQuery(value);
  }, [value]);

  // Search for companies when the user types
  useEffect(() => {
    const searchCompanies = async () => {
      if (searchQuery.length >= 3) {
        setIsSearching(true);
        setShowResults(true);

        try {
          const response = await fetch(
            `https://data.brreg.no/enhetsregisteret/api/enheter?${
              searchQuery.match(/^\d+$/) ? "organisasjonsnummer" : "navn"
            }=${searchQuery}`
          );
          const data = await response.json();

          if (data._embedded?.enheter) {
            setSearchResults(data._embedded.enheter);
          } else {
            setSearchResults([]);
          }
        } catch (error) {
          console.error("Error searching companies:", error);
          setSearchResults([]);
        } finally {
          setIsSearching(false);
        }
      } else {
        setSearchResults([]);
        setShowResults(false);
      }
    };

    const debounceTimeout = setTimeout(searchCompanies, 300);
    return () => clearTimeout(debounceTimeout);
  }, [searchQuery]);

  const handleCompanyClick = (company: Company) => {
    onCompanySelect(company);
    setShowResults(false);
  };

  return (
    <div className="relative">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${error ? "border-red-500" : ""} pr-10`}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          {isSearching ? (
            <Loader2 className="h-4 w-4 text-brand-500 animate-spin" />
          ) : (
            <Search className="h-4 w-4 text-brand-500" />
          )}
        </div>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

      {/* Company search results dropdown */}
      {showResults && (
        <div
          ref={searchResultsRef}
          className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-auto"
        >
          {isSearching ? (
            <div className="p-4 text-center text-brand-600">
              <Loader2 className="h-5 w-5 animate-spin mx-auto mb-2" />
              Søker...
            </div>
          ) : searchResults.length > 0 ? (
            <ul>
              {searchResults.map((company) => (
                <li
                  key={company.organisasjonsnummer}
                  className="px-4 py-2 hover:bg-brand-50 cursor-pointer border-b border-gray-100 last:border-0"
                  onClick={() => handleCompanyClick(company)}
                >
                  <div className="font-medium text-brand-900">
                    {company.navn}
                  </div>
                  <div className="text-sm text-brand-600">
                    Org.nr: {company.organisasjonsnummer}
                  </div>
                  {company.forretningsadresse && (
                    <div className="text-xs text-brand-500">
                      {company.forretningsadresse?.adresse[0]}{" "}
                      {company.forretningsadresse?.postnummer},{" "}
                      {company.forretningsadresse?.poststed}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4 text-center text-brand-600">
              Ingen selskaper funnet
            </div>
          )}
        </div>
      )}
    </div>
  );
}
