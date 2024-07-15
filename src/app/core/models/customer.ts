export interface Customer {
    id: string;
    companyName: string;
    contactName: string;
    contactTitle: string;
    address: string;
    city: string;
    postalCode: string;
    phone: number;
    fax: number;
    country: string;
}

export interface results {
    results: Customer[];
}

export interface CustomersData {
    results: results;
}
