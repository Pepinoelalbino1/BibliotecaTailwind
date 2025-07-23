import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, BookOpen } from 'lucide-react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BookOpen size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Iniciar Sesión</h1>
          <p className="text-slate-600">Accede a tu cuenta para gestionar tus reservas</p>
        </div>

        {/* Form */}
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <label className="form-label">Correo Electrónico</label>
                <div className="relative">
                  <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="form-input pl-12"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Contraseña</label>
                <div className="relative">
                  <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="form-input pl-12 pr-12"
                    placeholder="Tu contraseña"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-slate-600">Recordarme</span>
                </label>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Iniciar Sesión
              </button>
            </form>
            <div className="my-6 flex items-center justify-center">
              <span className="text-slate-400 text-sm">o</span>
            </div>
            <GoogleOAuthProvider clientId="TU_CLIENT_ID_DE_GOOGLE">
              <GoogleLogin
                onSuccess={credentialResponse => {
                  console.log('Google credential:', credentialResponse);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
                width="100%"
                theme="filled_black"
                text="signin_with"
                shape="pill"
              />
            </GoogleOAuthProvider>
          </div>
        </div>

        {/* Sign up link */}
        <div className="text-center">
          <p className="text-slate-600">
            ¿No tienes una cuenta?{' '}
            <Link to="/signup" className="text-blue-600 hover:text-blue-500 font-semibold">
              Crear cuenta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;