import Counter from "@/components/counter";
import s from './home.module.scss'


export default function Home() {
    return (
        <div className={s.home}>
            Home
            <Counter/>
        </div>
    );
}
