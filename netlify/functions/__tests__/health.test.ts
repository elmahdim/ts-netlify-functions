import { HttpStatusCode } from '../../../utils/http';
import LambdaTester from 'lambda-tester';
import { handler as healthHandler } from '../health';

describe('healthHandler', function () {
  it('returns resolved status', () => {
    return LambdaTester(healthHandler)
      .event()
      .expectResolve((result) => {
        expect(result.statusCode).toEqual(HttpStatusCode.OK);
        expect(result.body).toEqual(
          JSON.stringify({
            data: {
              status: 'OK',
            },
          })
        );
      });
  });
});
