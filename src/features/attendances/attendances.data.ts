import { CustomError } from '@utils/errors';
import AttendanceModel from './models/attendance.models';
import { IAttendance } from './models/attendance.interfaces';

export async function createAttendanceRecord(attendanceData: IAttendance) {
  try {
    // Verificar si ya existe un registro similar para el mismo momento
    const existingAttendance = await AttendanceModel.findOne({
      studentId: attendanceData.studentId,
      laboratoryId: attendanceData.laboratoryId,
      type: attendanceData.type,
      createdAt: {
        $gte: new Date(Date.now() - 5 * 60000) // últimos 5 minutos
      }
    });

    if (existingAttendance) {
      throw new CustomError({
        message: 'Ya existe un registro reciente para este estudiante',
        status: 400
      });
    }

    // Crear el nuevo registro
    const newAttendance = await AttendanceModel.create(attendanceData);
    return await newAttendance.populate(['studentId', 'laboratoryId']);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new CustomError({
      message: error.message || 'Error al crear el registro de asistencia',
      status: error.status || 500
    });
  }
}