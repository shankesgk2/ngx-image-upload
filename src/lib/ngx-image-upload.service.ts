import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxImageUploadService {
  constructor(private http: HttpClient) {
  }

  public postImage(url: string, image: File, headers?: HttpHeaders | { [name: string]: any }, partName: string = 'image', customFormData?: { [name: string]: any }, withCredentials?: boolean): Observable<any> {
    if (!url || url === '') {
      throw new Error('请设置url参数');
    }

    // add custom form data
    let formData = new FormData();
    for (let key in customFormData) {
      formData.append(key, customFormData[key]);
    }
    formData.append(partName, image);
    return this.http.post(url, formData, { headers: headers, withCredentials: withCredentials });
  }
}
