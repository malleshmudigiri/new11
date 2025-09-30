import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { CheckCircle, BarChart, Database, Layers, Settings } from "lucide-react";

const HealthSector: React.FC = () => {
  return (
    <div className="px-6 py-10 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-red-600">
          US Department of Health and Human Services (HHS)
        </h1>
        <h2 className="text-xl font-semibold text-gray-700">
          Driving Innovation for Health IT
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          We provide advanced IT solutions to support healthcare organizations, enabling them to deliver 
          secure, efficient, and innovative services that improve health outcomes and equity nationwide.
        </p>
      </div>

      {/* Operations & Maintenance */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-center text-blue-700">
          Operations and Maintenance (O&M) Support
        </h3>
        <p className="max-w-4xl mx-auto text-center text-gray-600">
          Delivering comprehensive IT services including modernization, security, database management,
          and application support for healthcare IT systems.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-6 text-center space-y-4">
              <Layers className="w-10 h-10 text-blue-600 mx-auto" />
              <h4 className="font-semibold text-lg">IT Modernization</h4>
              <p className="text-gray-600 text-sm">
                Development, enhancement, and maintenance of secure and scalable health IT systems.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-6 text-center space-y-4">
              <Database className="w-10 h-10 text-green-600 mx-auto" />
              <h4 className="font-semibold text-lg">Custom Application Support</h4>
              <p className="text-gray-600 text-sm">
                Managing databases, releases, and security for mission-critical healthcare applications.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-6 text-center space-y-4">
              <Settings className="w-10 h-10 text-purple-600 mx-auto" />
              <h4 className="font-semibold text-lg">COTS Application Optimization</h4>
              <p className="text-gray-600 text-sm">
                Deployment and optimization of platforms like ServiceNow, Salesforce, and other enterprise tools.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ServiceNow O&M */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-blue-700">ServiceNow O&M Support</h3>
          <p className="max-w-4xl mx-auto text-gray-600">
            Optimized IT operations with a dedicated ServiceNow instance, integrating with external
            healthcare systems for enhanced efficiency and service delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-6 space-y-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <h4 className="font-semibold text-lg">Dedicated ServiceNow Instance</h4>
              <p className="text-gray-600 text-sm">
                Customizing ServiceNow for health IT workflows, ensuring secure integration and data sharing.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-6 space-y-3">
              <BarChart className="w-8 h-8 text-blue-600" />
              <h4 className="font-semibold text-lg">Process Analysis & Optimization</h4>
              <p className="text-gray-600 text-sm">
                Identifying inefficiencies and implementing workflow improvements for healthcare IT services.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-6 space-y-3">
              <Layers className="w-8 h-8 text-purple-600" />
              <h4 className="font-semibold text-lg">Workflow Creation & Enhancement</h4>
              <p className="text-gray-600 text-sm">
                Streamlining processes to reduce response times and improve patient-centered services.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-6 space-y-3">
              <Database className="w-8 h-8 text-orange-600" />
              <h4 className="font-semibold text-lg">Integration & Reporting</h4>
              <p className="text-gray-600 text-sm">
                Developing cross-agency reporting tools and dashboards to improve healthcare system visibility.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center space-y-4 py-10">
        <h3 className="text-xl font-bold text-gray-800">Partner with Us</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are committed to transforming healthcare IT with secure, scalable, and innovative solutions.
          Let’s work together to create impactful change in the health sector.
        </p>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default HealthSector;
