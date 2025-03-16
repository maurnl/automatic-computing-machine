export class DataAccessFetch
{
    // GET
    async getData(url: string, params: string | null = null, returnResponse: boolean = false, showError: boolean = true, includeCredentials: boolean = false): Promise<boolean | Blob | Response>
    {
        let requestUrl = url;
  
        if(params)
        {
            const queryString = new URLSearchParams(params).toString();
            if (queryString)
            {                
                const separator = url.includes('?') ? '&' : '?';
                requestUrl = `${url}${separator}${queryString}`;
            }
        }

        try {
            let fetchParams: RequestInit  =
            {
                method: 'GET',
                headers:
                {
                    'Content-Type': 'application/json'
                }                
            };

            if(includeCredentials)
            {
                fetchParams.credentials = 'include';
            }            

            const response = await fetch(requestUrl, fetchParams);            

            if(response.ok)
            {
                const contentType = response.headers.get('Content-Type');
                if(contentType!.startsWith('image/'))
                {
                    try
                    {
                        const blob = await response.blob();
                        
                        return blob;
                    }
                    catch (error)
                    {
                        console.error('Error converting response to blob:', error);
                        return false;
                    }
                }
                else
                {
                    return returnResponse ? response : true;
                }
            }
            else
            {
                return returnResponse ? response : false;
            }
        }
        catch(error)
        {
            if(error instanceof TypeError)
            {                    
                console.log('Error: network.');
            }        
            if(showError)
            {
                console.error('Error posting data:', error);
            }
        
            return false;
        }
    }
    
    // POST
    async postData(url: string, payload: Object | null = null, returnResponse: boolean = false, showError: boolean = true, includeCredentials: boolean = false): Promise<boolean | Response>
    {
        try{            
            let payL = payload !== null ? JSON.stringify(payload) : '';

            let fetchParams: RequestInit  =
            {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'application/json'
                },
                body: payL
            };

            if(includeCredentials)
            {
                fetchParams.credentials = 'include';
            } 
    
            const response = await fetch(url, fetchParams);
    
            if(response.ok)
            {
                return returnResponse ? response : true;
            }
            else
            {
                return returnResponse ? response : false;
            }
        }
        catch(error)
        {            
            if(error instanceof TypeError)
            {                    
                console.log('network');
            }        
            if (showError)
            {
                console.error('Error posting data:', error);
            }
        
            return false;
        }
    }

    // PUT
    async putData(url: string, payload: Object, showError: boolean = false, includeCredentials: boolean): Promise<boolean | Response>
    {
        try {
            let fetchParams: RequestInit =
            {
                method: 'PUT',
                headers:
                {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }

            if(includeCredentials)
            {
                fetchParams.credentials = 'include';
            } 

            const response = await fetch(url, fetchParams);

            return response.ok ? response : false;            
        }
        catch (error)
        {
            if(error instanceof TypeError)
            {                    
                console.log('network');
            }        
            if (showError)
            {
                console.error('Error putting data:', error);
            }
        
            return false;
        }
    }
    
    // DELETE
    async deleteData(url: string, params: string | null = null, showError: boolean = false, includeCredentials: boolean): Promise<boolean | Response>
    {
        const queryString = new URLSearchParams(params || '').toString();
        const requestUrl = queryString  != '' ? `${url}?${queryString}` : url;
        try {
            let fetchParams: RequestInit =
            {
                method: 'DELETE',
                headers:
                {
                    'Content-Type': 'application/json'
                }
            };

            if(includeCredentials)
            {
                fetchParams.credentials = 'include';
            }

            const response = await fetch(requestUrl, fetchParams);

            return response.ok ? response : false;
        }
        catch (error)
        {
            if(error instanceof TypeError)
            {                    
                console.log('network');
            }        
            if(showError)
            {
                console.error('Error posting data:', error);
            }
        
            return false;
        }
    }
}