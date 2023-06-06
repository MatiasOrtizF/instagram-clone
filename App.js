import Main from './src/components/Main'
import { DataProvider } from './src/context/useDatas'

export default function App() {
    return (
        <DataProvider>
            <Main/>
        </DataProvider>
    );
}
