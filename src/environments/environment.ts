// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// URLS
// local: 'http://localhost:8080/api'
// heroku: 'https://peluqueriapp-mysql.herokuapp.com/api'

export const environment = {
  production: false,
  urlEndPoint: 'https://peluqueriapp-mysql.herokuapp.com/api',

  //General
  ok: 'OK',
  loading: 'Cargando...',
  incorrectcredentials: 'Usuario y/o contraseña incorrecto(s)',
  save: 'Guardar',
  close: 'Cerrar',
  delete: 'Eliminar',
  back: 'Volver',
  book: 'Reservar',
  menu: 'Menu',
  confirm: 'Confirmar',
  date: 'Fecha',
  employee: 'Empleado',
  customer: 'Cliente',
  service: 'Servicio',
  observations: 'Observaciones',
  minutes: 'Minutos',
  endHour: 'Hora Fin',
  initialHour: 'Hora Inicio',
  phone: 'Teléfono',
  info: 'Información',
  avaiable: 'Disponible',
  notavaiable: 'No Disponible',
  name: 'Nombre',
  lastname: 'Apellidos',
  password: 'Contraseña',
  type: 'Tipo',
  duration: 'Duración',
  genre: 'Género',
  description: 'Description',
  man: 'Hombre',
  woman: 'Mujer',
  email: 'Email',
  price: 'Precio',
  days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
  orange: "orange",
  cancel: 'Cancelar',
  infoCompanyLbl: 'Información Empresa',
  employeeLbl: 'Gestión de Empleados',
  appointmentLbl: 'Gestión de Reservas',
  servicesLbl: 'Gestión de Servicios',
  bookAppointmentLbl: 'Reservar Cita',
  myappointmentsLbl: 'Mis Reservas',
  logout: 'Salir',
  noresult: 'No hay resultados en la búsqueda',
  excludeDays: 'Excluir días no laborables',
  company: 'Empresa',
  startDate: 'Fechas Desde',
  endDate: 'Fecha Hasta',
  login: 'Iniciar Sesión',
  initSession: 'Iniciar Sesión',
  register: 'Registrarse',
  deleteLbl: 'Eliminar registro',
  deleteConfirmation: '¿Desea eliminar el registro actual?',

  //Employee
  successEmployeeCreated: 'Empleado creado con éxito',
  successEmployeeUpdated: 'Empleado actualizado con éxito',
  successEmployeeRemoved: 'Empleado eliminado con éxito',
  newEmployeeAction: 'Alta Empleado',
  newEmployeeTitle: 'Nuevo Empleado',
  editEmployeeTitle: 'Editar Empleado',
  employeeProfile: 'Perfil Empleado',
  userAdmin: 'Usuario Administrador',
  userActive: 'Usuario Activo',


  //Company Data
  companyDataTitle: 'Datos de la Empresa',
  newCompanyTitle: 'Nueva Información de la Empresa',
  editCompanyTitle: 'Editar Información Empresa: ',
  successCompanyCreated: 'Información de empresa guardada con éxito',
  successCompanyRemoved: 'Información de empresa eliminada con éxito',
  companyActive: 'Empresa activa',
  afternoonSchedule: 'Horario Tardes',
  morningSchedule: 'Horario Mañanas',
  weekendSchedule: 'Horario Fin de Semana',


  //Service Data
  serviceDataTitle: 'Servicio',
  newServiceTitle: 'Nuevo Servicio',
  editServiceTitle: 'Editar Servicio: ',
  successServiceCreated: 'Servicio guardado con éxito',
  successServiceRemoved: 'Servicio eliminado con éxito',

  //Appointments
  successAppointmentGenerated: 'Citas generadas con éxito',
  generatingAppointments: 'Generando citas...',
  searchingAvaiableAppointments: 'Buscando citas disponibles...',
  titleBookAppointment: 'Confirmar cita',
  confirmationBookAppointment: '¿Estás seguro que quieres reservar la cita?',
  customerAppointmentHistoryTitle: 'Historial de citas',
  generateAppointment: 'Generar Citas',
  searchAppointment: 'Buscar Cita',
  showAllAppointments: 'Mostrar Todas las Citas',
  noavaiabilityLbl: 'No hay ninguna cita disponible',
  noappointments: 'No hay ninguna cita',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
