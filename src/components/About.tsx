import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          About Me
        </h2>
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed text-gray-700">
              I'm a passionate AI Engineer with expertise in machine learning, deep learning, and natural language processing. 
              With a strong foundation in both theoretical concepts and practical applications, 
              I develop innovative solutions that leverage the power of artificial intelligence 
              to solve complex real-world problems.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};