<!-- 99b15cfd-b278-4d6b-93df-b301cd0012f3 bdac74d9-3490-402f-810b-e7f45cb5f706 -->
# Implementação de Autenticação Firebase

## Arquivos a criar

1. **src/lib/firebase.ts** - Configuração do Firebase Auth usando variáveis de ambiente
2. **src/context/AuthContext.tsx** - Contexto React com estado do usuário e funções de autenticação
3. **src/pages/OnboardingPage.tsx** - Página simples de onboarding
4. **src/components/ProtectedRoute.tsx** - Componente para proteger rotas (opcional)
5. **.env.example** - Template de variáveis de ambiente

## Arquivos a modificar

1. **package.json** - Adicionar dependência `firebase`
2. **src/main.tsx** - Envolver `<App />` com `<AuthProvider>`
3. **src/App.tsx** - Adicionar rota `/onboarding` e usar `ProtectedRoute` (opcional)
4. **src/pages/LoginPage.tsx** - Integrar com `AuthContext` para login com Google e e-mail/senha, adicionar tratamento de erros e redirecionamento

## Detalhes de implementação

### Firebase Setup

- Usar `initializeApp` e `getAuth` do Firebase
- Ler configurações de `import.meta.env` (Vite)
- Variáveis: `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_APP_ID`

### AuthContext

- Estado: `user: User | null`
- `useEffect` com `onAuthStateChanged` para ouvir mudanças
- Funções: `loginWithGoogle()`, `loginWithEmail()`, `signupWithEmail()`, `logout()`
- Hook `useAuth()` para acesso ao contexto

### LoginPage

- Formulário de e-mail/senha conectado a `loginWithEmail()`
- Botão "Continuar com Google" conectado a `loginWithGoogle()`
- Estado local para mensagens de erro
- Redirecionamento para `/onboarding` em caso de sucesso
- Manter estilo visual consistente com `SignupPage.tsx`

### OnboardingPage

- Página simples com texto "Onboarding / Triagem inicial (em breve)"
- Estilo Tailwind consistente com o projeto

### ProtectedRoute (opcional)

- Verificar se há usuário logado
- Redirecionar para `/login` se não autenticado
- Renderizar `children` se autenticado