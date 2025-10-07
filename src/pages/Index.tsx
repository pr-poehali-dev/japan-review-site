import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const sections = [
  {
    id: 'tourism',
    title: 'Туризм',
    icon: 'Plane',
    description: 'Откройте для себя лучшие туристические направления Японии',
    image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800&q=80'
  },
  {
    id: 'cities',
    title: 'Города',
    icon: 'Building2',
    description: 'От древних столиц до современных мегаполисов',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80'
  },
  {
    id: 'cuisine',
    title: 'Кухня',
    icon: 'UtensilsCrossed',
    description: 'Традиционная японская кухня и уличная еда',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80'
  },
  {
    id: 'culture',
    title: 'Культура',
    icon: 'Sparkles',
    description: 'Искусство, театр и современная культура',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80'
  },
  {
    id: 'traditions',
    title: 'Традиции',
    icon: 'Flame',
    description: 'Древние обычаи и церемонии',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80'
  },
  {
    id: 'history',
    title: 'История',
    icon: 'BookOpen',
    description: 'От самураев до современной эпохи',
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80'
  }
];

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=600&q=80', title: 'Тории Фусими Инари' },
  { url: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=80', title: 'Гора Фудзи' },
  { url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80', title: 'Храм Киёмидзу' },
  { url: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=80', title: 'Сакура в цвету' },
  { url: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=600&q=80', title: 'Токийская башня' },
  { url: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=600&q=80', title: 'Бамбуковая роща' }
];

const Index = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-primary/20 bg-card sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">🎌</div>
              <div>
                <h1 className="text-3xl font-bold text-primary">日本</h1>
                <p className="text-sm text-muted-foreground">Путеводитель по Японии</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setSelectedSection(section.id)}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-primary mb-4">Добро пожаловать</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Погрузитесь в удивительный мир японской культуры, традиций и современности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Card 
                key={section.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                onClick={() => setSelectedSection(section.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <Icon name={section.icon as any} size={24} />
                    <h3 className="text-2xl font-bold">{section.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">{section.description}</p>
                  <Button 
                    variant="ghost" 
                    className="mt-4 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Узнать больше
                    <Icon name="ChevronRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Фотогалерея</h2>
            <p className="text-lg text-muted-foreground">Аутентичные снимки Японии</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer aspect-square"
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-medium p-4">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-card rounded-lg p-12 text-center border border-primary/20">
          <div className="max-w-2xl mx-auto">
            <div className="text-6xl mb-6">🏮</div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Начните своё путешествие
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Откройте для себя тысячелетнюю культуру, потрясающие пейзажи и удивительные традиции Страны восходящего солнца
            </p>
            <Button size="lg" className="text-lg px-8">
              Планировать поездку
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-primary/20 mt-20 py-8 bg-card">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Японский путеводитель. Откройте для себя красоту Японии</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
