import { Button } from "@/components"

export const HeaderDashboard = () => {

    const styles = {
        borderBottom: `0.5px solid rgba(255, 255, 255, 0.20)`,
        background: `var(--COLOR-COLOR, linear-gradient(236deg, rgba(93, 99, 111, 0.10) 1.26%, rgba(25, 30, 40, 0.35) 100%))`,
        backdropFilter: `blur(12px)`
    }

    return (
        <nav style={styles} className="py-6 px-8 flex justify-between">
            <img height={48} width={148} src="/reso.png" />
            <Button className="bg-transparent rounded-full">Connect Wallet</Button>
        </nav>
    )
}