import {
  Heart,
  Shield,
  Users,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      {/* Hero Section */}

      <section className="py-16 mt-5 lg:mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center space-x-2 mb-6">
            <div className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">
              RPM
            </div>
            <div className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
              CCM
            </div>
            <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              PCM
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Empowering Heart Patients with{" "}
            <span className="text-cyan-500">Connected</span>,{" "}
            <span className="text-cyan-600">Compassionate</span> Care
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Our RPM, CCM, and PCM programs are designed to support patients with
            chronic and complex conditions—especially heart-related
            diseases—through proactive monitoring, continuous care coordination,
            and personalized treatment plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 cursor-pointer transition-colors text-lg font-semibold">
              Enroll Today
            </div>
            <div className="px-8 py-3 border-2 border-cyan-500 text-cyan-600 rounded-lg hover:bg-cyan-50 cursor-pointer transition-colors text-lg font-semibold">
              Learn More
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <CheckCircle className="inline-block h-8 w-8 text-green-500 mr-2" />
              What We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* RPM Card */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-cyan-200 hover:shadow-lg transition-all">
              <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-cyan-600 mb-2">
                Remote Patient Monitoring (RPM)
              </h3>
              <p className="text-gray-600 mb-4">
                Track your vital signs daily using easy-to-use medical devices
                from the comfort of your home.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">We monitor:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Blood pressure</li>
                    <li>• Heart rate</li>
                    <li>• Weight</li>
                    <li>• Blood oxygen levels</li>
                    <li>• Glucose (for diabetic patients)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Early detection of issues</li>
                    <li>• Fewer ER visits or readmissions</li>
                    <li>• Greater peace of mind with 24/7 oversight</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CCM Card */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-teal-200 hover:shadow-lg transition-all">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-teal-600 mb-2">
                Chronic Care Management (CCM)
              </h3>
              <p className="text-gray-600 mb-4">
                For patients with two or more chronic conditions such as
                hypertension, heart failure, diabetes, or COPD.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What's included:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Monthly check-ins by a nurse or care coordinator</li>
                    <li>• Medication management</li>
                    <li>• Preventive care planning</li>
                    <li>• Health education and support</li>
                    <li>• Coordination with specialists and pharmacies</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400">
                  <p className="text-sm font-medium text-teal-800">
                    Goal: Keep your conditions stable and improve your quality
                    of life over time.
                  </p>
                </div>
              </div>
            </div>

            {/* PCM Card */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-blue-600 fill-current" />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                Principal Care Management (PCM)
              </h3>
              <p className="text-gray-600 mb-4">
                Focuses on patients with one serious chronic condition—such as
                advanced heart disease.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">How we help:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>
                      • Develop personalized care plans for your condition
                    </li>
                    <li>• Frequent touchpoints to monitor progress</li>
                    <li>• Help with medication adherence, test scheduling</li>
                    <li>
                      • Specialist-led intervention from our cardiology team
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                  <p className="text-sm font-medium text-blue-800">
                    Outcome: Patients feel supported, cared for, and in control
                    of their heart health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              💓 Why Choose Orlando Heart & Vascular Institute?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced cardiology team is focused on treating symptoms,
              preventing complications, and improving long-term outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="font-semibold mb-2">
                Dedicated Care Coordinators
              </h3>
              <p className="text-sm text-gray-600">
                Access to experienced professionals who know your case
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-teal-600 fill-current" />
              </div>
              <h3 className="font-semibold mb-2">
                Personalized Treatment Plans
              </h3>
              <p className="text-sm text-gray-600">
                Based on your unique medical history and needs
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Seamless Connection</h3>
              <p className="text-sm text-gray-600">
                Direct line to your cardiologist and healthcare team
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="font-semibold mb-2">
                State-of-the-Art Technology
              </h3>
              <p className="text-sm text-gray-600">
                Integrated with your medical records for comprehensive care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🌐 How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Enrollment & Consent</h3>
              <p className="text-sm text-gray-600">
                Our staff walks you through enrollment and device setup
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Monitoring & Communication</h3>
              <p className="text-sm text-gray-600">
                Use easy devices at home while our team reviews your readings
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Monthly Follow-Ups</h3>
              <p className="text-sm text-gray-600">
                Review progress, adjust treatment plans, and provide ongoing
                support
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Available Anytime</h3>
              <p className="text-sm text-gray-600">
                Our team responds to health concerns before they become
                emergencies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cyan-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              👥 Who Is Eligible?
            </h2>
            <p className="text-lg text-gray-600">
              You may qualify for RPM, CCM, or PCM if you:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    Have one or more chronic conditions (e.g., hypertension,
                    heart failure, AFib)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Want to avoid frequent hospitalizations</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Need help managing medications or symptoms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Are looking for more personalized, at-home care</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
