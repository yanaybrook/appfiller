import React from 'react'
import { DocumentViewer } from './components/DocumentViewer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Berlin Relocation Helper</h1>
        </div>
      </header>
      <main className="container mx-auto py-6 px-4">
        <DocumentViewer />
      </main>
    </div>
  )
}

export default App