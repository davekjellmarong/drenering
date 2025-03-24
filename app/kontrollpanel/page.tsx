import { Tabs, TabsContent, TabsList } from "@/src/components/ui/tabs";
import { Button } from "@/src/components/ui/button";
import { Plus, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";
import { TabsTrigger } from "@radix-ui/react-tabs";

export default function Kontrollpanel() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 pt-20">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dine Tilbudsforespørsler</h1>
          <p className="text-gray-600">
            Se og administrer dine forespørsler om dreneringstjenester.
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
          <Plus className="h-4 w-4" /> Ny Tilbudsforespørsel
        </Button>
      </div>

      <Tabs defaultValue="alle">
        <TabsList className="border-b border-gray-200 w-full justify-start mb-6">
          <TabsTrigger
            value="alle"
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
          >
            Alle Tilbud
          </TabsTrigger>
          <TabsTrigger
            value="venter"
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
          >
            Venter
          </TabsTrigger>
          <TabsTrigger
            value="mottatt"
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
          >
            Mottatt
          </TabsTrigger>
          <TabsTrigger
            value="akseptert"
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
          >
            Akseptert
          </TabsTrigger>
          <TabsTrigger
            value="avslatt"
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
          >
            Avslått
          </TabsTrigger>
        </TabsList>

        <TabsContent value="alle" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tilbud 1 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <div className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-2">
                  Tilbud Mottatt
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Quick Drain Solutions"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Quick Drain Solutions</h3>
                    <div className="flex text-yellow-400 text-xs">★★★★★</div>
                  </div>
                </div>
                <h2 className="text-xl font-bold mt-3">Drensrensing</h2>
                <p className="text-sm text-gray-500">Opprettet 2 days ago</p>
                <p className="mt-3 text-gray-700">
                  Kitchen sink is clogged and draining very slowly. Tried using
                  drain cleaner but it didnt work.
                </p>
              </div>
              <div className="bg-gray-50 p-4">
                <div className="text-sm text-gray-500 mb-2">Tilbudsbeløp</div>
                <div className="text-2xl font-bold">150 kr</div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Clock className="h-4 w-4 mr-1" />
                  Estimert ferdigstillelse: 2-3 hours
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">contact@quickdrain.com</span>
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                    Aksepter Tilbud
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Avslå
                  </Button>
                </div>
              </div>
            </div>

            {/* Tilbud 2 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <div className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium mb-2">
                  Venter
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Pro Plumbing & Drain"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Pro Plumbing & Drain</h3>
                    <div className="flex text-yellow-400 text-xs">★★★★★</div>
                  </div>
                </div>
                <h2 className="text-xl font-bold mt-3">Dreneringsinspeksjon</h2>
                <p className="text-sm text-gray-500">Opprettet 1 day ago</p>
                <p className="mt-3 text-gray-700">
                  Concerned about possible tree root intrusion in sewer line.
                  Need inspection to confirm.
                </p>
              </div>
              <div className="bg-gray-50 p-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">(555) 987-6543</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">service@proplumbing.com</span>
                </div>
              </div>
            </div>

            {/* Tilbud 3 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <div className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium mb-2">
                  Akseptert
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Emergency Drain Masters"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Emergency Drain Masters</h3>
                    <div className="flex text-yellow-400 text-xs">★★★★★</div>
                  </div>
                </div>
                <h2 className="text-xl font-bold mt-3">Akutt Drensrensing</h2>
                <p className="text-sm text-gray-500">Opprettet 7 days ago</p>
                <p className="mt-3 text-gray-700">
                  Bathroom is flooding due to completely clogged toilet. Need
                  emergency service immediately.
                </p>
              </div>
              <div className="bg-gray-50 p-4">
                <div className="text-sm text-gray-500 mb-2">Tilbudsbeløp</div>
                <div className="text-2xl font-bold">220 kr</div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Clock className="h-4 w-4 mr-1" />
                  Estimert ferdigstillelse: 1-2 hours
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">(555) 456-7890</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">help@drainmasters.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="venter">
          <div className="text-center py-12">
            <p className="text-gray-500">
              Ingen ventende tilbud for øyeblikket.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="mottatt">
          <div className="text-center py-12">
            <p className="text-gray-500">
              Ingen mottatte tilbud for øyeblikket.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="akseptert">
          <div className="text-center py-12">
            <p className="text-gray-500">
              Ingen aksepterte tilbud for øyeblikket.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="avslatt">
          <div className="text-center py-12">
            <p className="text-gray-500">
              Ingen avslåtte tilbud for øyeblikket.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
