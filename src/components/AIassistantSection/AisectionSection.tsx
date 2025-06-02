import React from 'react'
import {
  MessageSquare,
} from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

function AisectionSection() {
  return (
<Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-primary" />
                AI Career Assistant
              </CardTitle>
              <CardDescription>Get personalized career advice</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3 mb-3">
                <div className="flex items-start gap-3">
                  <Avatar className="mt-0.5">
                    <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
                  </Avatar>
                  <div className="rounded-lg bg-secondary p-3 text-secondary-foreground">
                    <p className="text-sm">
                      Based on your profile, I suggest focusing on TypeScript to increase your job matches by 15%. Would
                      you like me to suggest some courses?
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Input placeholder="Ask a question..." className="flex-1" />
                <Button variant="secondary" size="icon">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="w-full">
                <Link to="/assistant">Open AI Assistant</Link>
              </Button>
            </CardFooter>
          </Card>  )
}

export default AisectionSection
