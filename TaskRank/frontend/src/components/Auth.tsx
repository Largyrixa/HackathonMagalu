// src/components/Auth.tsx

import { useState } from 'react';
import { supabase } from '../supabaseClient';   // Verificar caminho depoisss

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      alert('Login realizado com sucesso!');
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        setLoading(true);
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        alert('Cadastro realizado! Verifique seu e-mail para confirmação.');
    } catch (error: any) {
        alert(error.error_description || error.message);
    } finally {
        setLoading(false);
    }
  }

  return (
    <div>
      <h2>StudyRats Login</h2>
      <p>Faça login ou cadastre-se</p>
      <form>
        <input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button onClick={handleLogin} disabled={loading}>
            {loading ? 'Entrando...' : 'Login'}
          </button>
          <button onClick={handleSignUp} disabled={loading}>
            {loading ? 'Criando conta...' : 'Cadastrar'}
          </button>
        </div>
      </form>
    </div>
  );
}
