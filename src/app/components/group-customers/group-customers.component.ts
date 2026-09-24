import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupCustomerHttpService } from '../../services/group-customer-http.service';
import { ICustomerGroup } from '../../services/customer.model';

@Component({
  selector: 'app-group-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group-customers.component.html',
  styleUrls: ['./group-customers.component.css'],
})
export class GroupCustomersComponent {
  groups: ICustomerGroup[] = [];
  errorMessage: string = '';

  constructor(private _service: GroupCustomerHttpService) {
    this._service.getGroupCustomersHandleError().subscribe({
      next: (data) => {
        this.groups = data;
      },
      error: (err) => {
        this.errorMessage = 'Không tải được dữ liệu khách hàng: ' + err.message;
      },
    });
  }
}
