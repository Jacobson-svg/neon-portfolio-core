import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import { ScrollToTop } from '@/components/portfolio/ScrollToTop';
import Home from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';
import NotFound from '@/pages/NotFound';
export default function App() {
 return <LanguageProvider><BrowserRouter><ScrollToTop/><Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/projects/:slug" element={<ProjectDetail/>}/>
  <Route path="*" element={<NotFound/>}/>
 </Routes></BrowserRouter></LanguageProvider>;
}
