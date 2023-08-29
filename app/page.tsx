import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4">
      <p className="text-4xl font-bold text-indigo-500">Hello Discord Clone</p>

      <Button>Click me</Button>

      <Button variant="destructive">Delete me</Button>
    </div>
  )
}
