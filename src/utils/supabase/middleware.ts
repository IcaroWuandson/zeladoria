import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  const supabaseResponse = NextResponse.next()  // Usando `const`, já que não há reatribuição

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          // Atualizando os cookies da resposta
          cookiesToSet.forEach(({ name, value, options }) => {
            // Define os cookies diretamente na requisição
            request.cookies.set(name, value)
            // Define os cookies na resposta também
            supabaseResponse.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  // Refresca o token de autenticação
  await supabase.auth.getUser()

  return supabaseResponse
}
