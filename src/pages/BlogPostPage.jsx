import { useParams, Link } from 'react-router-dom';
import { Container } from "@/components/common/Container";
import { PageTransition } from "@/components/common/PageTransition";
import blogPostsData from '@/data/blog-posts.json';
import { ArrowLeft } from 'lucide-react';
import drFelipeImage from '@/assets/images/dr-felipe-hero.jpg';

export function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPostsData.find((p) => p.slug === slug);

  const author = {
    name: 'Dr. Felipe Brasil',
    role: 'Ortopedista Especialista em Joelho',
    avatar: drFelipeImage,
  };

  if (!post) {
    return (
      <PageTransition>
        <Container className="py-20 text-center">
          <h1 className="text-2xl font-bold">Post não encontrado!</h1>
          <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Voltar para o Blog
          </Link>
        </Container>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="bg-white">
        <div className="bg-slate-50 py-16 sm:py-24">
          <Container className="max-w-4xl mx-auto text-center">
            <p className="text-base font-semibold text-primary">{post.date}</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-gray-800">{post.title}</h1>
          </Container>
        </div>
        
        <Container className="py-16 sm:py-20 max-w-4xl mx-auto">
          <div className="aspect-video w-full overflow-hidden rounded-2xl mb-12">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <article className="prose prose-lg lg:prose-xl max-w-none text-gray-700">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>

          <div className="mt-16 border-t pt-8">
            <div className="flex items-center gap-4">
              <img src={author.avatar} alt={author.name} className="h-16 w-16 rounded-full object-cover" />
              <div>
                <p className="font-bold text-lg text-gray-800">{author.name}</p>
                <p className="text-muted-foreground">{author.role}</p>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold">
                <ArrowLeft className="h-5 w-5" />
                Voltar para todos os posts
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </PageTransition>
  );
}