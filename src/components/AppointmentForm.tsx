
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarCheck } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const AppointmentForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    toast({
      title: "Appointment Scheduled",
      description: "We've received your request and will contact you shortly to confirm your appointment.",
      duration: 5000,
    });
  };

  return (
    <section id="appointment" className="section-container relative overflow-hidden">
      <div className="absolute inset-0 bg-hospital-500 opacity-5 -z-10" />
      <h2 className="section-title">Book an Appointment</h2>
      <p className="section-subtitle">
        Schedule your visit with our medical professionals. We'll contact you to confirm your appointment.
      </p>
      
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="johndoe@example.com" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="(123) 456-7890" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select>
                <SelectTrigger id="department">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="neurology">Neurology</SelectItem>
                  <SelectItem value="orthopedics">Orthopedics</SelectItem>
                  <SelectItem value="pediatrics">Pediatrics</SelectItem>
                  <SelectItem value="general">General Medicine</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="date">Preferred Date</Label>
              <Input id="date" type="date" min={new Date().toISOString().split('T')[0]} required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="time">Preferred Time</Label>
              <Select>
                <SelectTrigger id="time">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (1PM - 5PM)</SelectItem>
                  <SelectItem value="evening">Evening (6PM - 8PM)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <textarea 
              id="message" 
              className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Please share any additional information about your visit"
            ></textarea>
          </div>
          
          <Button type="submit" className="w-full bg-hospital-500 hover:bg-hospital-600 py-6">
            <CalendarCheck className="mr-2" /> Schedule Appointment
          </Button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
