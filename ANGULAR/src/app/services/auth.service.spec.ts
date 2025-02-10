import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Import HttpClientTestingModule to mock HTTP requests
      providers: [AuthService]  // Provide AuthService in the test module
    });
    
    // Inject AuthService and HttpTestingController
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Ensure no outstanding HTTP requests
    httpMock.verify();
  });

  // Test that the service is created successfully
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Test the login function
  it('should send login request and receive a token', () => {
    // Mock response data that the server would send
    const mockResponse = {
      token: 'dummy-jwt-token',
      expiresIn: 86400
    };

    // Call the login method with dummy login data
    service.login({ email: 'test@example.com', password: 'password' }).subscribe(response => {
      // Verify the response contains the expected token and expiration time
      expect(response.token).toEqual(mockResponse.token);
      expect(response.expiresIn).toEqual(mockResponse.expiresIn);
    });

    // Expect a POST request to the login endpoint
    const req = httpMock.expectOne('http://localhost:8080/auth/login');
    expect(req.request.method).toBe('POST');  // Ensure it’s a POST request

    // Provide the mock response data
    req.flush(mockResponse);
  });
});
