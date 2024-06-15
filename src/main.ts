import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Client Assyst')
  .setDescription('A description of the Client_Assyst API')
  .setVersion('1.0')
  .addTag('Client')
  .addApiKey(
    {
      name: 'x-access-token',
      type: 'apiKey',
      in: 'header',
    },
    'x-access-token',
  )
  .addApiKey(
    {
      name: 'Authorization',
      type: 'apiKey',
      in: 'header',
    },
    'Authorization',
  )
  .build();
  const v1Document = SwaggerModule.createDocument(app, config);
  

  // Serve Swagger UI for each version
  SwaggerModule.setup('api', app, v1Document);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await app.listen(3003);
}
bootstrap();
