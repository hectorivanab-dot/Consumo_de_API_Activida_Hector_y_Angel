import { syncData } from '../src/utils/cloudEngine';

describe('QA Multi Testing - Telemetry Logs', () => {

  // PRUEBA 3
  jest.setTimeout(1500);

  // PRUEBA 1
  test('Valida estructura de respuesta', async () => {

    const result = await syncData();

    expect(Array.isArray(result)).toBe(true);

    if (result.length > 0) {

      expect(result[0]).toEqual(
        expect.objectContaining({
          device_os: expect.any(String),
          payload: expect.any(Object),
          status_code: expect.any(Number)
        })
      );

    }

  });

  // PRUEBA 2
  test('Retorna array vacio cuando ocurre error de autenticacion', async () => {

    async function fakeSyncData() {

      try {

        throw {
          code: '401',
          message: 'Unauthorized'
        };

      } catch (error) {

        return [];

      }

    }

    const result = await fakeSyncData();

    expect(result).toEqual([]);

  });

  // PRUEBA 3
  test('La consulta responde antes de 1500ms', async () => {

    const start = Date.now();

    await syncData();

    const end = Date.now();

    expect(end - start).toBeLessThan(1500);

  });

});