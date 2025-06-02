import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
function ProfileSection() {
  return (
<Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Your Profile</CardTitle>
                <Button asChild variant="ghost" size="sm">
                  <Link to="/profile">Edit</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Jane Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-1">Jane Doe</h3>
              <p className="text-muted-foreground mb-3">Senior Frontend Developer</p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {["React", "JavaScript", "UI/UX", "TypeScript"].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="w-full flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Profile Views</span>
                  <span className="font-medium">142</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Applied Jobs</span>
                  <span className="font-medium">24</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Saved Jobs</span>
                  <span className="font-medium">18</span>
                </div>
              </div>
            </CardContent>
          </Card>  )
}

export default ProfileSection
