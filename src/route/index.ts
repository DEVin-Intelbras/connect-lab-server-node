import { LocalController, UserController, DeviceController, UserDeviceController } from '../controller'

export const Routes = [
  {
    method: 'get',
    route: '/locals',
    controller: LocalController,
    action: 'all',
  },
  {
    method: 'get',
    route: '/devices',
    controller: DeviceController,
    action: 'all',
  },
  {
    method: 'get',
    route: '/devices/:id',
    controller: DeviceController,
    action: 'one',
  },
  {
    method: 'get',
    route: '/users/:id',
    controller: UserController,
    action: 'one',
  },
  {
    method: 'put',
    route: '/users/:id',
    controller: UserController,
    action: 'update',
  },
  {
    method: 'get',
    route: '/userDevices',
    controller: UserDeviceController,
    action: 'all',
  },
  {
    method: 'get',
    route: '/userDevices/:id',
    controller: UserDeviceController,
    action: 'one',
  },
  {
    method: 'post',
    route: '/userDevices',
    controller: UserDeviceController,
    action: 'create',
  },
  {
    method: 'delete',
    route: '/userDevices/:id',
    controller: UserDeviceController,
    action: 'delete',
  },
  {
    method: 'get',
    route: '/userDevices/user/:userId',
    controller: UserDeviceController,
    action: 'byUser',
  },
  {
    method: 'put',
    route: '/userDevices/:id',
    controller: UserDeviceController,
    action: 'updateStatus',
  },
]
