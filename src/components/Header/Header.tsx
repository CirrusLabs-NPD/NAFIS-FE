
import {Search,UploadCloud,} from "lucide-react"
import {Button} from "@/components/ui/button"
function Header() {
  return (
    <>
    <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-4xl mb-1">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Jane. Here's your career progress overview.</p>
        </div>
        <div className="hidden md:flex space-x-2">
          <Button variant="outline" className="inline-flex items-center space-x-2">
            <UploadCloud className="h-4 w-4" />
            <span>Update CV</span>
          </Button>
          <Button variant={"default"} className="inline-flex items-center space-x-2">
            <Search className="h-4 w-4" />
            <span>Find Jobs</span>
          </Button>
        </div>
      </div>
    </>
  )
}


export default Header
