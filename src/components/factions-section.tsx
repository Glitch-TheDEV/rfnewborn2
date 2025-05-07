import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

export function FactionsSection() {
  return (
    <section id="factions" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm dark:bg-muted/30">Three Races</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Choose Your Faction</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              In the war for universal dominance, three races fight for control of the Novus galaxy. 
              Choose your allegiance and fight for supremacy.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Accretia Empire</CardTitle>
                <CardDescription>Cyborg Engineers & Warriors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-40 rounded-md bg-muted flex items-center justify-center overflow-hidden">
                    <img 
                      src="/src/assets/accretia.png" 
                      alt="Accretia" 
                      className="w-auto h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A race of cyborgs with superior technology, the Accretia Empire 
                    relies on raw power and advanced weaponry. Their lack of magical 
                    abilities is compensated by their technological might.
                  </p>
                  <ul className="grid gap-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <PlusIcon className="h-4 w-4 text-primary" />
                      <span>Superior defense capabilities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <PlusIcon className="h-4 w-4 text-primary" />
                      <span>Advanced technology and heavy weapons</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <PlusIcon className="h-4 w-4 text-primary" />
                      <span>Durable in combat situations</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Bellato Union</CardTitle>
                <CardDescription>Versatile Humanoids</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-40 rounded-md bg-muted flex items-center justify-center overflow-hidden">
                    <img 
                      src="/src/assets/bellato.png" 
                      alt="Bellato" 
                      className="w-auto h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Humanoids with a balance of technology and magic, the Bellato 
                    rely on versatility and adaptability in combat. They're known 
                    for their MAU units - piloted mechanical battle suits.
                  </p>
                  <ul className="grid gap-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <PlusIcon className="h-4 w-4 text-primary" />
                      <span>Balanced magical and technological abilities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <PlusIcon className="h-4 w-4 text-primary" />
                      <span>MAU battle suits with powerful weaponry</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <PlusIcon className="h-4 w-4 text-primary" />
                      <span>Versatile combat roles</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Cora Alliance</CardTitle>
                <CardDescription>Magical Spiritualists</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-40 rounded-md bg-muted flex items-center justify-center overflow-hidden">
                    <img 
                      src="/src/assets/cora.png" 
                      alt="Cora" 
                      className="w-auto h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    An ancient race with strong spiritual connections, the Cora 
                    Alliance specializes in arcane arts and magical combat. Their 
                    spiritual powers and summons make them formidable opponents.
                  </p>
                  <ul className="grid gap-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <PlusIcon className="h-4 w-4 text-primary" />
                      <span>Superior magical abilities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <PlusIcon className="h-4 w-4 text-primary" />
                      <span>Powerful summons and spiritual allies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <PlusIcon className="h-4 w-4 text-primary" />
                      <span>Strong area-of-effect spells</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
