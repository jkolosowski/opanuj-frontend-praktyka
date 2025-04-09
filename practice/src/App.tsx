import { useState } from 'react';
import { Switch } from './components/Switch';

const nameRegex = /^[A-Za-z]{2,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  consent: boolean;
}

function App() {
  const [form, setForm] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs: typeof errors = {};
    if (!nameRegex.test(form.firstName))
      errs.firstName = 'Imię musi mieć min. 2 litery i bez znaków specjalnych';
    if (!nameRegex.test(form.lastName))
      errs.lastName =
        'Nazwisko musi mieć min. 2 litery i bez znaków specjalnych';
    if (!emailRegex.test(form.email))
      errs.email = 'Nieprawidłowy format adresu email';
    if (!form.consent)
      errs.consent = 'Zgoda na przetwarzanie danych jest wymagana';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      alert('Formularz wysłany!');
    }
  };

  return (
    <main className="max-w-md mx-auto p-4">
      <h1 className="text-2xl mb-4">Formularz rejestracyjny</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label htmlFor="firstName">Imię</label>
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="block border p-2 w-full"
            aria-invalid={!!errors.firstName}
          />
          {errors.firstName && (
            <div className="text-red-500" aria-live="polite">
              {errors.firstName}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="lastName">Nazwisko</label>
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="block border p-2 w-full"
            aria-invalid={!!errors.lastName}
          />
          {errors.lastName && (
            <div className="text-red-500" aria-live="polite">
              {errors.lastName}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="block border p-2 w-full"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <div className="text-red-500" aria-live="polite">
              {errors.email}
            </div>
          )}
        </div>

        <div className="mb-4">
          <Switch
            id="consent-switch"
            label="Zgadzam się na przetwarzanie danych osobowych"
            checked={form.consent}
            onChange={(val) => setForm({ ...form, consent: val })}
          />
          {errors.consent && (
            <div className="text-red-500" aria-live="polite">
              {errors.consent}
            </div>
          )}
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          type="submit"
        >
          Wyślij
        </button>
      </form>
    </main>
  );
}

export default App;
