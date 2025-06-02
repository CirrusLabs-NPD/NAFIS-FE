import React from 'react'
import {
  Briefcase,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  PieChart,
  Stars,
  User,
} from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

function Achevement() {
  return (
 <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Stars className="mr-2 h-5 w-5 text-primary" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: User, label: "Profile Pro", completed: true },
                  { icon: Briefcase, label: "Job Hunter", completed: true },
                  { icon: GraduationCap, label: "Skills Master", completed: false },
                  { icon: MessageSquare, label: "AI Explorer", completed: false },
                  { icon: PieChart, label: "Data Driven", completed: false },
                  { icon: LayoutDashboard, label: "Career Starter", completed: true },
                ].map((achievement, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center justify-center p-2 rounded-lg border aspect-square ${
                      achievement.completed ? "bg-primary/10 border-primary/20" : "bg-muted/30 border-muted opacity-60"
                    }`}
                  >
                    <achievement.icon
                      className={`h-6 w-6 mb-1 ${achievement.completed ? "text-primary" : "text-muted-foreground"}`}
                    />
                    <span className="text-xs text-center font-medium">{achievement.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="w-full">
                <Link to="/achievements">View All Achievements</Link>
              </Button>
            </CardFooter>
          </Card>  )
}

export default Achevement
