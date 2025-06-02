import React from 'react'
import { Link } from 'react-router-dom'
import {
  Briefcase,
  CalendarCheck2,
  ChevronRight,
  GraduationCap,
  
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

function Completion() {
  return (
<div className="md:col-span-2 space-y-6">
          <Card>
            <div className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Complete Your Profile</h2>
                  <p className="text-muted-foreground">
                    Your profile is 65% complete. Finish it to attract more job opportunities.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Profile Completion</span>
                  <span>65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div className="mt-4 flex justify-end">
                <Button asChild size="sm">
                  <Link to="/profile-builder">Complete Profile</Link>
                </Button>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Briefcase className="mr-2 h-5 w-5 text-primary" />
                    Job Matches
                  </div>
                  <Badge variant="secondary">14 new</Badge>
                </CardTitle>
                <CardDescription>Based on your profile and preferences</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <ul className="space-y-3">
                  {[
                    { title: "Senior Frontend Developer", company: "TechCorp Inc.", match: 98 },
                    { title: "UI/UX Designer", company: "DesignHub", match: 92 },
                    { title: "Full Stack Developer", company: "Innovate Studios", match: 87 },
                  ].map((job, i) => (
                    <li key={i} className="flex items-center justify-between border-b pb-3 last:border-0">
                      <div>
                        <p className="font-medium">{job.title}</p>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-primary/10">
                          {job.match}% Match
                        </Badge>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full">
                  <Link to="/jobs">View All Job Matches</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                    Learning Suggestions
                  </div>
                  <Badge variant="secondary">7 new</Badge>
                </CardTitle>
                <CardDescription>Courses to enhance your skills</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <ul className="space-y-3">
                  {[
                    { title: "Advanced React Patterns", provider: "Frontend Masters", relevance: "High" },
                    { title: "UI/UX Design Principles", provider: "Design Academy", relevance: "Medium" },
                    { title: "TypeScript Fundamentals", provider: "Educative", relevance: "High" },
                  ].map((course, i) => (
                    <li key={i} className="flex items-center justify-between border-b pb-3 last:border-0">
                      <div>
                        <p className="font-medium">{course.title}</p>
                        <p className="text-sm text-muted-foreground">{course.provider}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={course.relevance === "High" ? "default" : "secondary"}
                          className={course.relevance === "High" ? "bg-primary" : ""}
                        >
                          {course.relevance}
                        </Badge>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full">
                  <Link to="/learning">View All Learning Resources</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalendarCheck2 className="mr-2 h-5 w-5 text-primary" />
                Applications Status
              </CardTitle>
              <CardDescription>Track your recent job applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium bg-muted">Job</th>
                      <th className="px-4 py-3 text-left text-sm font-medium bg-muted">Company</th>
                      <th className="px-4 py-3 text-left text-sm font-medium bg-muted">Date</th>
                      <th className="px-4 py-3 text-left text-sm font-medium bg-muted">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {[
                      {
                        job: "Frontend Developer",
                        company: "TechCorp Inc.",
                        date: "May 15, 2023",
                        status: "Interview",
                      },
                      {
                        job: "UI/UX Designer",
                        company: "DesignHub",
                        date: "May 12, 2023",
                        status: "Applied",
                      },
                      {
                        job: "Product Designer",
                        company: "InnovateSoft",
                        date: "May 8, 2023",
                        status: "Rejected",
                      },
                      {
                        job: "Senior Developer",
                        company: "WebSolutions",
                        date: "May 5, 2023",
                        status: "Offer",
                      },
                    ].map((application, i) => (
                      <tr key={i} className="hover:bg-muted/50">
                        <td className="px-4 py-4 text-sm">{application.job}</td>
                        <td className="px-4 py-4 text-sm">{application.company}</td>
                        <td className="px-4 py-4 text-sm text-muted-foreground">{application.date}</td>
                        <td className="px-4 py-4 text-sm">
                          <Badge
                            variant={
                              application.status === "Offer"
                                ? "default"
                                : application.status === "Interview"
                                  ? "outline"
                                  : application.status === "Applied"
                                    ? "secondary"
                                    : "destructive"
                            }
                            className={application.status === "Offer" ? "bg-primary" : ""}
                          >
                            {application.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="w-full">
                <Link to="/applications">View All Applications</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
  )
}

export default Completion
