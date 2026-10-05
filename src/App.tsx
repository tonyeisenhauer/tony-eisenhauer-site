import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { BuyBox } from './pages/BuyBox'
import { SubmitDeal } from './pages/SubmitDeal'
import { LuxuryStr } from './pages/LuxuryStr'
import { Contact } from './pages/Contact'
import { Newsletter } from './pages/Newsletter'
import { Resources } from './pages/Resources'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="buy-box" element={<BuyBox />} />
        <Route path="submit-deal" element={<SubmitDeal />} />
        <Route path="luxury-str" element={<LuxuryStr />} />
        <Route path="contact" element={<Contact />} />
        <Route path="newsletter" element={<Newsletter />} />
        <Route path="resources" element={<Resources />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
