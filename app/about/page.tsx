import Image from "next/image";
import { Users, Award, Globe, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About ElectroShop
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about bringing you the latest and greatest in
            electronics and technology. Our commitment to quality, customer
            service, and innovation drives everything we do.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2020, ElectroShop started as a small passion project to
              make premium electronics accessible to everyone. What began as a
              simple idea has grown into a trusted destination for tech
              enthusiasts worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that great technology should be available to everyone,
              which is why we work tirelessly to source the best products at
              competitive prices while maintaining the highest standards of
              quality and customer service.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we're proud to serve thousands of customers globally,
              helping them discover and enjoy the latest innovations in
              electronics, accessories, and smart home solutions.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our team at work"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                <p className="text-gray-600">
                  We carefully curate every product to ensure it meets our high
                  standards for quality and performance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. Their
                  satisfaction is our top priority.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                <p className="text-gray-600">
                  We serve customers worldwide with fast, reliable shipping and
                  local support.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Passion</h3>
                <p className="text-gray-600">
                  We're passionate about technology and love sharing that
                  excitement with our customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-blue-600 text-white rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-blue-100">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
