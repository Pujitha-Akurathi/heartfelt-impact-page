import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const VolunteerForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    areasOfInterest: [] as string[],
    availability: '',
    message: ''
  });

  const areasOfInterest = [
    'Education & Tutoring',
    'Community Outreach',
    'Environmental Projects',
    'Healthcare Support',
    'Event Organization',
    'Administrative Support',
    'Fundraising',
    'Social Media & Marketing'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email) {
      toast({
        title: "Please fill in required fields",
        description: "Full name and email are required to submit the form.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Thank you for volunteering! 🎉",
      description: "We've received your application and will contact you soon with next steps.",
    });

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      areasOfInterest: [],
      availability: '',
      message: ''
    });
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      areasOfInterest: checked 
        ? [...prev.areasOfInterest, interest]
        : prev.areasOfInterest.filter(item => item !== interest)
    }));
  };

  return (
    <section id="volunteer" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Join Our Volunteer Community
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to make a difference? Fill out the form below and become part of our amazing volunteer family. 
              Together, we can create positive change in communities around the world.
            </p>
          </div>

          {/* Form */}
          <div className="bg-card rounded-3xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-base font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    className="h-12 text-base"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="youremail@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="h-12 text-base"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="h-12 text-base"
                />
              </div>

              {/* Areas of Interest */}
              <div className="space-y-4">
                <Label className="text-base font-medium">
                  Areas of Interest (Select all that apply)
                </Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {areasOfInterest.map((interest) => (
                    <div key={interest} className="flex items-center space-x-3">
                      <Checkbox
                        id={interest}
                        checked={formData.areasOfInterest.includes(interest)}
                        onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                        className="w-5 h-5"
                      />
                      <Label
                        htmlFor={interest}
                        className="text-sm font-normal leading-relaxed cursor-pointer"
                      >
                        {interest}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="space-y-2">
                <Label htmlFor="availability" className="text-base font-medium">
                  Availability (Optional)
                </Label>
                <Input
                  id="availability"
                  type="text"
                  placeholder="e.g., Weekends, Evenings, 10 hours per month"
                  value={formData.availability}
                  onChange={(e) => setFormData(prev => ({ ...prev, availability: e.target.value }))}
                  className="h-12 text-base"
                />
              </div>

              {/* Additional Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-base font-medium">
                  Tell us more about yourself (Optional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Share your skills, interests, or any questions you might have..."
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="min-h-[120px] text-base resize-y"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button type="submit" className="btn-hero text-lg px-12">
                  Join Our Team
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  By submitting this form, you agree to be contacted by our volunteer coordination team.
                </p>
              </div>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              What happens next?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                  1
                </div>
                <h4 className="font-medium text-foreground">Application Review</h4>
                <p className="text-sm text-muted-foreground">We'll review your application within 48 hours</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                  2
                </div>
                <h4 className="font-medium text-foreground">Welcome Call</h4>
                <p className="text-sm text-muted-foreground">A friendly chat to discuss opportunities</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                  3
                </div>
                <h4 className="font-medium text-foreground">Start Making Impact</h4>
                <p className="text-sm text-muted-foreground">Begin your volunteer journey with us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm;
