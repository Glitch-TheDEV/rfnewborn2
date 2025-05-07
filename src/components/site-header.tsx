import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { useIsMobile } from '@/hooks/use-mobile';
import { useMobileMenu } from '@/hooks/use-mobile-menu';
import { X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function SiteHeader() {
  const isMobile = useIsMobile();
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tighter">RF Online NewBorn</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/#about">About</Link>
            <Link href="/#factions">Factions</Link>
            <Link href="/#features">Features</Link>
            <Link href="/#newsletter">Newsletter</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between md:justify-end">
          <div className="md:hidden flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tighter">RF Online</span>
            </Link>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button size="sm">Join Beta</Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background z-50 border-b"
          >
            <div className="container py-4">
              <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={closeMenu}>
                <X className="h-5 w-5" />
              </Button>
              <nav className="flex flex-col space-y-4 text-lg font-medium">
                <Link href="/#about" onClick={closeMenu}>
                  About
                </Link>
                <Link href="/#factions" onClick={closeMenu}>
                  Factions
                </Link>
                <Link href="/#features" onClick={closeMenu}>
                  Features
                </Link>
                <Link href="/#newsletter" onClick={closeMenu}>
                  Newsletter
                </Link>
                <Button size="sm" className="w-full mt-2">
                  Join Beta
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
