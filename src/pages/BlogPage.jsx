import { Container } from "@/components/common/Container";
import { PageTransition } from "@/components/common/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import blogPostsData from '@/data/blog-posts.json';
import { Link } from 'react-router-dom';

function BlogPage() {
  const allPosts = blogPostsData;

  return (
    <PageTransition>
      <div className="bg-white">
        <div className="bg-slate-50 py-16 sm:py-24">
          <Container className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800">Blog e Novidades</h1>
            <p className="mt-6 text-lg max-w-3xl mx-auto text-muted-foreground">
              Artigos e insights sobre os avanços da ortopedia, medicina regenerativa e dicas para uma vida com mais movimento e menos dor.
            </p>
          </Container>
        </div>

        <Container className="py-20 sm:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="relative h-56 bg-slate-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                    <h3 className="mt-2 text-xl font-semibold text-gray-800 hover:text-primary">{post.title}</h3>
                    <p className="mt-3 text-base text-muted-foreground">{post.excerpt}</p>
                    <p className="mt-4 font-semibold text-primary">Leia Mais →</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    </PageTransition>
  );
}

export default BlogPage;