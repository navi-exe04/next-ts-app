// Los componentes que no tengan un "use client" son componentes del servidor
import Counter from "@/components/Index/Counter"

export default function Index() {
    // server component
    return (
        <div>
            <h1>Index!</h1>
            <h2>Hello world, user this counter to try :)</h2>
            {/* client component */}
            <Counter></Counter>
        </div>
    )
}
