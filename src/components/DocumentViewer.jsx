import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DocumentViewer() {
  return (
    <div className="w-full space-y-4">
      <Tabs defaultValue="pdf-view" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="pdf-view">PDF View</TabsTrigger>
          <TabsTrigger value="form-view">Form View</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pdf-view" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <iframe
                src="https://umgdaytdkxcmnyrekiso.supabase.co/storage/v1/object/public/application//antrag-ogb_efoeb_2022%20(1).pdf#toolbar=0&navpanes=0&scrollbar=0"
                width="100%"
                height="800px"
                style={{ border: 'none' }}
                title="Berlin School Registration Form"
              />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="form-view" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Form</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Form view will be implemented here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}