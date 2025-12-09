import Link from "next/link";
import { BookOpen, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-border bg-muted/30">
            <div className="container mx-auto px-4 py-12 md:px-8">
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                                <BookOpen className="h-5 w-5" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-foreground">UESA</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Uniting and empowering education students in Uganda for a better future.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-foreground">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/activities" className="hover:text-primary">Activities</Link></li>
                            <li><Link href="/membership" className="hover:text-primary">Membership</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>



                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-foreground">Contact</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>Kampala, Uganda</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span>info@uesa-uganda.org</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>+256 727074666</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Uganda Education Students Association. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
