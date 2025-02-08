import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const formData = await request.formData()

  // Here you would typically process the form data and send an email
  // For demonstration, we'll just log the data
  console.log(Object.fromEntries(formData))

  // In a real application, you would send an email here
  // await sendEmailToPartner(formData)

  return NextResponse.json({ message: "Form submitted successfully" })
}

