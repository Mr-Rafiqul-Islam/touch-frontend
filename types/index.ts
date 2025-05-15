// All Types here
export type userData = {
  id: "integer";
  name: "string";
  email: "string";
  phone: "string";
  email_verified_at: "string (datetime)";
  verification_code: "null or string";
  status: "integer";
  role: "string";
  created_at: "string (datetime)";
  updated_at: "string (datetime)";
};
export type userResponse = {
  message: string;
  user: userData;
};

export type Division = {
  id: number;
  name: string;
  status: number;
  created_at: string;
  updated_at: string;
};

export type District = {
  id: number;
  division_id: number;
  name: string;
  status: number;
  created_at: string;
  updated_at: string;
  division: Division;
};

export type Location = {
  id: number;
  district_id: number;
  name: string;
  status: number;
  created_at: string;
  updated_at: string;
  district: District;
};

export type Counter = {
  id: number;
  company_id: number;
  name: string;
  counter_no: string | null;
  location_id: number;
  status: string;
  created_at: string;
  updated_at: string;
};

export type Employee = {
  id: number;
  company_id: number;
  department: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  document: string | null;
  nid: string;
  status: string;
  created_at: string;
  updated_at: string;
};

export type Route = {
  id: number;
  company_id: number;
  from_location_id: string;
  to_location_id: string;
  start_counter_id: number;
  end_counter_id: number;
  via_counters_id: string;
  route_manager_id: number;
  checkers_id: string[];
  document: string;
  status: string;
  created_at: string;
  updated_at: string;
  from_location: Location;
  to_location: Location;
  start_counter: Counter;
  end_counter: Counter;
  route_manager: Employee;
};

export type SeatState = {
  id: number;
}
export type Seats = {
  id: number;
  seat_no: string;
  is_booked: number;
};
export type Vehicle = {
  id: number;
  company_id: number;
  owner_id: number;
  type_id: number;
  category: string;
  name: string;
  vehicle_no: string;
  engin_no: string;
  chest_no: string;
  total_seat: number;
  amenities_id: string[];
  document: string | null;
  is_booked: string;
  current_location_id: number;
  status: number;
  created_at: string;
  updated_at: string;
  owner: Employee;
  type: {
    id: number;
    company_id: number;
    name: string;
    status: number;
    created_at: string;
    updated_at: string;
  };
  seats: Seats[];
  amenities?: {
    id: number;
    name: string;
  }[];
};

export type SiteSetting = {
  id: number;
  company_id: number;
  name: string | null;
  title: string | null;
  meta_description: string | null;
  favicon: string;
  logo: string;
  site_preview_image: string;
  email: string | null;
  phone: string | null;
  address: string | null;
  short_description: string | null;
  site_link: string | null;
  facebook_link: string | null;
  twitter_link: string | null;
  linkedin_link: string | null;
  instagram_link: string | null;
  youtube_link: string | null;
  created_at: string;
  updated_at: string;
};

export type Company = {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  phone: string | null;
  verification_code: string | null;
  reset_password_token: string | null;
  reset_password_token_created_at: string | null;
  image: string | null;
  status: number;
  is_registration_by: string | null;
  created_at: string;
  updated_at: string;
  site_setting: SiteSetting;
};

export type Trip = {
  id: number;
  company_id: number;
  route_id: number;
  vehicle_id: number;
  driver_id: number;
  supervisor_id: number;
  helper_id: number;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  reporting_time: string;
  total_route_cost: string;
  ticket_price: string;
  trip_status: number;
  status: string;
  created_at: string;
  updated_at: string;
  route: Route;
  vehicle: Vehicle;
  company: Company;
  driver: Employee;
  supervisor: Employee;
};

export type BookingList = {
  id: number;
  company_id: number;
  trip_id: number;
  vehicle_id: number;
  seat_data: {
    seatId: number;
    seatNo: string;
    seatPrice: string;
  }[];
  passenger_name: string;
  passenger_phone: string;
  travel_date: string; // Format: YYYY-MM-DD
  user_id: string;
  type: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  company: {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    phone: string | null;
    verification_code: string | null;
    reset_password_token: string | null;
    reset_password_token_created_at: string | null;
    image: string | null;
    status: number;
    is_registration_by: string | null;
    created_at: string;
    updated_at: string;
    site_setting: SiteSetting;
  };
  trip: {
    id: number;
    company_id: number;
    route_id: number;
    vehicle_id: number;
    driver_id: number;
    supervisor_id: number;
    helper_id: number;
    start_date: string;
    end_date: string;
    start_time: string;
    end_time: string;
    reporting_time: string;
    total_route_cost: string;
    ticket_price: string;
    trip_status: number;
    status: string;
    created_at: string;
    updated_at: string;
    route: {
      id: number;
      company_id: number;
      from_location_id: string;
      to_location_id: string;
      start_counter_id: number;
      end_counter_id: number;
      via_counters_id: string;
      route_manager_id: number;
      checkers_id: string;
      document: string;
      status: string;
      created_at: string;
      updated_at: string;
      from_location: {
        id: number;
        district_id: number;
        name: string;
        status: number;
        created_at: string;
        updated_at: string;
      };
      to_location: {
        id: number;
        district_id: number;
        name: string;
        status: number;
        created_at: string;
        updated_at: string;
      };
      start_counter: {
        id: number;
        company_id: number;
        name: string;
        counter_no: string | null;
        location_id: number;
        status: string;
        created_at: string;
        updated_at: string;
      };
      end_counter: {
        id: number;
        company_id: number;
        name: string;
        counter_no: string | null;
        location_id: number;
        status: string;
        created_at: string;
        updated_at: string;
      };
    };
  };
  vehicle: {
    id: number;
    company_id: number;
    owner_id: number;
    type_id: number;
    category: string;
    name: string;
    vehicle_no: string;
    engin_no: string;
    chest_no: string;
    total_seat: number;
    amenities_id: string;
    document: string | null;
    is_booked: string;
    current_location_id: number;
    status: number;
    created_at: string;
    updated_at: string;
  };
};

