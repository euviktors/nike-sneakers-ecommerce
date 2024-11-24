import { Button } from "@/components/ui/button"

interface BannerProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  backgroundImage: string
}

export function Banner({ title, description, buttonText, buttonLink, backgroundImage }: BannerProps) {
  return (
    <div className="relative h-96 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-4">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8">{description}</p>
        <Button asChild>
          <a href={buttonLink}>{buttonText}</a>
        </Button>
      </div>
    </div>
  )
}

