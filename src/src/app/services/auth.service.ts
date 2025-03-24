import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'jwtToken';

  constructor(private http: HttpClient) {}

  // Logowanie: wysyłamy username i password do endpointu /login.
  // Oczekujemy obiektu z tokenem w polu "token".
  login(username: string, password: string) {
    return this.http.post<{ token: string }>(
      `${environment.apiUrl}/login`, 
      { username, password }
    );
  }

  // Zapisywanie tokenu w localStorage.
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Pobieranie tokenu z localStorage.
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Sprawdzamy, czy w localStorage jest token (na tej podstawie uznajemy, że użytkownik jest "zalogowany").
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // Wylogowanie: usuwamy token z localStorage.
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
