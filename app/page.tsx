'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, Palette, Users2 } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Sparkles,
      title: 'Express Your Vibe',
      description: 'Create personalized Vibe Cards that showcase your unique style and mood.',
    },
    {
      icon: Palette,
      title: 'Style Challenges',
      description: 'Participate in weekly challenges and get inspired by the community.',
    },
    {
      icon: Users2,
      title: 'Connect & Share',
      description: 'Join a vibrant community of like-minded individuals sharing their journey.',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Share Your <span className="text-primary">Vibe</span> With The World
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          Express yourself through personalized Vibe Cards, connect with others, and join style challenges in a supportive community.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title} className="p-6 text-center">
              <div className="flex justify-center">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h2 className="mt-4 text-xl font-semibold">{feature.title}</h2>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}