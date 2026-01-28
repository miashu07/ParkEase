# 📁 PROJECT EXPORT FOR LLMs

## 📊 Project Information

- **Project Name**: `backend`
- **Generated On**: 2026-01-27 15:12:42 (Asia/Calcutta / GMT+06:30)
- **Total Files Processed**: 182
- **Export Tool**: Easy Whole Project to Single Text File for LLMs v1.1.0
- **Tool Author**: Jota / José Guilherme Pandolfi

### ⚙️ Export Configuration

| Setting | Value |
|---------|-------|
| Language | `en` |
| Max File Size | `1 MB` |
| Include Hidden Files | `false` |
| Output Format | `both` |

## 🌳 Project Structure

```
├── 📁 logs/
│   └── 📄 parkease.log (611.8 KB)
├── 📁 qrcodes/
│   └── 📄 PZ1_SA1.png (2.92 KB)
├── 📁 src/
│   ├── 📁 main/
│   │   ├── 📁 java/
│   │   │   └── 📁 com/
│   │   │       └── 📁 parkease/
│   │   │           ├── 📁 config/
│   │   │           │   ├── 📄 CorsConfig.java (1.88 KB)
│   │   │           │   ├── 📄 EmailConfig.java (1.45 KB)
│   │   │           │   ├── 📄 SchedulerConfig.java (241 B)
│   │   │           │   └── 📄 WebSocketConfig.java (975 B)
│   │   │           ├── 📁 controller/
│   │   │           │   ├── 📄 AdminController.java (2.27 KB)
│   │   │           │   ├── 📄 AuthController.java (2.57 KB)
│   │   │           │   ├── 📄 DemoPaymentController.java (5.57 KB)
│   │   │           │   ├── 📄 HealthController.java (1.68 KB)
│   │   │           │   ├── 📄 ParkingSlotController.java (1.57 KB)
│   │   │           │   ├── 📄 PaymentController.java (6.63 KB)
│   │   │           │   ├── 📄 PricingController.java (1.11 KB)
│   │   │           │   ├── 📄 TestController.java (1.42 KB)
│   │   │           │   ├── 📄 UserController.java (5.64 KB)
│   │   │           │   └── 📄 WebSocketController.java (947 B)
│   │   │           ├── 📁 dto/
│   │   │           │   ├── 📁 request/
│   │   │           │   │   ├── 📄 ForgotPasswordRequest.java (242 B)
│   │   │           │   │   ├── 📄 LoginRequest.java (224 B)
│   │   │           │   │   ├── 📄 ParkingZoneDto.java (550 B)
│   │   │           │   │   ├── 📄 PaymentRequest.java (262 B)
│   │   │           │   │   ├── 📄 RegisterRequest.java (344 B)
│   │   │           │   │   ├── 📄 ReservationRequest.java (384 B)
│   │   │           │   │   ├── 📄 ResetPasswordRequest.java (282 B)
│   │   │           │   │   ├── 📄 SlotDto.java (231 B)
│   │   │           │   │   ├── 📄 UpdateProfileRequest.java (144 B)
│   │   │           │   │   └── 📄 VehicleDto.java (365 B)
│   │   │           │   ├── 📁 response/
│   │   │           │   │   ├── 📄 AdminStatsResponse.java (500 B)
│   │   │           │   │   ├── 📄 LoginResponse.java (163 B)
│   │   │           │   │   ├── 📄 ParkingZoneResponseDto.java (175 B)
│   │   │           │   │   ├── 📄 RegisterUserResponseDto.java (233 B)
│   │   │           │   │   ├── 📄 ReservationResponseDto.java (612 B)
│   │   │           │   │   ├── 📄 SlotResponseDto.java (226 B)
│   │   │           │   │   ├── 📄 UserResponseDto.java (193 B)
│   │   │           │   │   └── 📄 VehicleResponseDto.java (228 B)
│   │   │           │   ├── 📁 websocket/
│   │   │           │   │   ├── 📄 ReservationUpdate.java (437 B)
│   │   │           │   │   └── 📄 SlotStatusUpdate.java (458 B)
│   │   │           │   └── 📄 AdminStatsResponse.java (261 B)
│   │   │           ├── 📁 entity/
│   │   │           │   ├── 📄 BasePrice.java (516 B)
│   │   │           │   ├── 📄 ParkingSlot.java (953 B)
│   │   │           │   ├── 📄 ParkingZone.java (842 B)
│   │   │           │   ├── 📄 PaymentTransaction.java (1.02 KB)
│   │   │           │   ├── 📄 Reservation.java (1.88 KB)
│   │   │           │   ├── 📄 Role.java (695 B)
│   │   │           │   ├── 📄 User.java (2.15 KB)
│   │   │           │   └── 📄 Vehicle.java (744 B)
│   │   │           ├── 📁 enums/
│   │   │           │   ├── 📄 SlotStatus.java (105 B)
│   │   │           │   └── 📄 VehicleType.java (119 B)
│   │   │           ├── 📁 exception/
│   │   │           │   ├── 📄 BadRequestException.java (179 B)
│   │   │           │   ├── 📄 GlobalExceptionHandler.java (2.85 KB)
│   │   │           │   └── 📄 ResourceNotFoundException.java (199 B)
│   │   │           ├── 📁 repository/
│   │   │           │   ├── 📄 BasePriceRepository.java (359 B)
│   │   │           │   ├── 📄 ParkingSlotRepository.java (1.29 KB)
│   │   │           │   ├── 📄 ParkingZoneRepository.java (487 B)
│   │   │           │   ├── 📄 PaymentTransactionRepository.java (348 B)
│   │   │           │   ├── 📄 ReservationRepository.java (2.67 KB)
│   │   │           │   ├── 📄 RoleRepository.java (349 B)
│   │   │           │   └── 📄 UserRepository.java (483 B)
│   │   │           ├── 📁 scheduler/
│   │   │           │   └── 📄 ReservationExpiryScheduler.java (1.19 KB)
│   │   │           ├── 📁 security/
│   │   │           │   ├── 📄 CustomUserDetails.java (1.38 KB)
│   │   │           │   ├── 📄 JwtAuthenticationFilter.java (3.07 KB)
│   │   │           │   ├── 📄 JwtUtil.java (2.61 KB)
│   │   │           │   └── 📄 SecurityConfig.java (4.33 KB)
│   │   │           ├── 📁 seeder/
│   │   │           │   ├── 📄 AdminSeeder.java (1.46 KB)
│   │   │           │   ├── 📄 DemoDataSeeder.java (10.42 KB)
│   │   │           │   └── 📄 RoleSeeder.java (1.09 KB)
│   │   │           ├── 📁 service/
│   │   │           │   ├── 📄 AdminAnalyticsService.java (1.95 KB)
│   │   │           │   ├── 📄 AuthService.java (3.28 KB)
│   │   │           │   ├── 📄 CustomUserDetailsService.java (1013 B)
│   │   │           │   ├── 📄 DemoPaymentService.java (6.73 KB)
│   │   │           │   ├── 📄 DemoPaymentServiceImpl.java (1.3 KB)
│   │   │           │   ├── 📄 EmailService.java (1.75 KB)
│   │   │           │   ├── 📄 ParkingSlotService.java (2.45 KB)
│   │   │           │   ├── 📄 ParkingZoneService.java (2.82 KB)
│   │   │           │   ├── 📄 PaymentService.java (329 B)
│   │   │           │   ├── 📄 PricingService.java (1.93 KB)
│   │   │           │   ├── 📄 QRCodeService.java (3.6 KB)
│   │   │           │   ├── 📄 ReservationService.java (6.71 KB)
│   │   │           │   └── 📄 UserService.java (1.79 KB)
│   │   │           ├── 📁 specification/
│   │   │           │   └── 📄 ReservationSpecs.java (1.68 KB)
│   │   │           ├── 📁 util/
│   │   │           │   ├── 📄 ParkingZoneMapper.java (1016 B)
│   │   │           │   ├── 📄 ReservationMapper.java (1.7 KB)
│   │   │           │   ├── 📄 SlotMapper.java (750 B)
│   │   │           │   └── 📄 UserMapper.java (1.09 KB)
│   │   │           └── 📄 ParkEaseApplication.java (475 B)
│   │   └── 📁 resources/
│   │       ├── 📁 META-INF/
│   │       │   └── 📄 additional-spring-configuration-metadata.json
│   │       └── 📄 application.properties (3.5 KB)
│   └── 📁 test/
│       └── 📁 java/
│           └── 📁 com/
│               ├── 📁 parkease/
│               │   └── 📄 ParkEaseApplicationTests.java (217 B)
│               └── 📁 parkingzone_system/
│                   └── 📁 demo/
├── 📁 target/
│   ├── 📁 classes/
│   │   ├── 📁 com/
│   │   │   └── 📁 parkease/
│   │   │       ├── 📁 config/
│   │   │       │   ├── 📄 CorsConfig.class (1.92 KB)
│   │   │       │   ├── 📄 EmailConfig.class (1.46 KB)
│   │   │       │   ├── 📄 SchedulerConfig.class (474 B)
│   │   │       │   └── 📄 WebSocketConfig.class (1.98 KB)
│   │   │       ├── 📁 controller/
│   │   │       │   ├── 📄 AdminController.class (3.43 KB)
│   │   │       │   ├── 📄 AuthController.class (4.27 KB)
│   │   │       │   ├── 📄 DemoPaymentController.class (7.15 KB)
│   │   │       │   ├── 📄 HealthController.class (2.51 KB)
│   │   │       │   ├── 📄 ParkingSlotController.class (2.44 KB)
│   │   │       │   ├── 📄 PaymentController.class (8.28 KB)
│   │   │       │   ├── 📄 PricingController.class (2.99 KB)
│   │   │       │   ├── 📄 TestController.class (2.58 KB)
│   │   │       │   ├── 📄 UserController.class (6.37 KB)
│   │   │       │   └── 📄 WebSocketController.class (2.13 KB)
│   │   │       ├── 📁 dto/
│   │   │       │   ├── 📁 request/
│   │   │       │   │   ├── 📄 ForgotPasswordRequest.class (1.6 KB)
│   │   │       │   │   ├── 📄 LoginRequest.class (1.73 KB)
│   │   │       │   │   ├── 📄 ParkingZoneDto.class (2.49 KB)
│   │   │       │   │   ├── 📄 PaymentRequest.class (1.93 KB)
│   │   │       │   │   ├── 📄 RegisterRequest.class (2.26 KB)
│   │   │       │   │   ├── 📄 ReservationRequest.class (1.74 KB)
│   │   │       │   │   ├── 📄 ResetPasswordRequest.class (1.86 KB)
│   │   │       │   │   ├── 📄 SlotDto.class (1.77 KB)
│   │   │       │   │   ├── 📄 UpdateProfileRequest.class (1.42 KB)
│   │   │       │   │   └── 📄 VehicleDto.class (2.52 KB)
│   │   │       │   ├── 📁 response/
│   │   │       │   │   ├── 📄 AdminStatsResponse.class (2.28 KB)
│   │   │       │   │   ├── 📄 LoginResponse.class (1.62 KB)
│   │   │       │   │   ├── 📄 ParkingZoneResponseDto.class (1.76 KB)
│   │   │       │   │   ├── 📄 RegisterUserResponseDto.class (2.05 KB)
│   │   │       │   │   ├── 📄 ReservationResponseDto.class (3.53 KB)
│   │   │       │   │   ├── 📄 SlotResponseDto.class (1.16 KB)
│   │   │       │   │   ├── 📄 UserResponseDto.class (1.99 KB)
│   │   │       │   │   └── 📄 VehicleResponseDto.class (2.06 KB)
│   │   │       │   ├── 📁 websocket/
│   │   │       │   │   ├── 📄 ReservationUpdate.class (4.75 KB)
│   │   │       │   │   └── 📄 SlotStatusUpdate.class (4.72 KB)
│   │   │       │   └── 📄 AdminStatsResponse.class (921 B)
│   │   │       ├── 📁 entity/
│   │   │       │   ├── 📄 BasePrice.class (1.67 KB)
│   │   │       │   ├── 📄 ParkingSlot.class (2.86 KB)
│   │   │       │   ├── 📄 ParkingSlot$SlotStatus.class (1.31 KB)
│   │   │       │   ├── 📄 ParkingZone.class (2.22 KB)
│   │   │       │   ├── 📄 PaymentTransaction.class (3.31 KB)
│   │   │       │   ├── 📄 PaymentTransaction$PaymentStatus.class (1.33 KB)
│   │   │       │   ├── 📄 Reservation.class (5.2 KB)
│   │   │       │   ├── 📄 Reservation$ReservationStatus.class (1.41 KB)
│   │   │       │   ├── 📄 Role.class (1.33 KB)
│   │   │       │   ├── 📄 User.class (3.93 KB)
│   │   │       │   └── 📄 Vehicle.class (2.44 KB)
│   │   │       ├── 📁 enums/
│   │   │       │   ├── 📄 SlotStatus.class (1.14 KB)
│   │   │       │   └── 📄 VehicleType.class (1.19 KB)
│   │   │       ├── 📁 exception/
│   │   │       │   ├── 📄 BadRequestException.class (432 B)
│   │   │       │   ├── 📄 GlobalExceptionHandler.class (5.58 KB)
│   │   │       │   └── 📄 ResourceNotFoundException.class (450 B)
│   │   │       ├── 📁 repository/
│   │   │       │   ├── 📄 BasePriceRepository.class (576 B)
│   │   │       │   ├── 📄 ParkingSlotRepository.class (2.16 KB)
│   │   │       │   ├── 📄 ParkingZoneRepository.class (829 B)
│   │   │       │   ├── 📄 PaymentTransactionRepository.class (465 B)
│   │   │       │   ├── 📄 ReservationRepository.class (2.65 KB)
│   │   │       │   ├── 📄 RoleRepository.class (603 B)
│   │   │       │   └── 📄 UserRepository.class (765 B)
│   │   │       ├── 📁 scheduler/
│   │   │       │   └── 📄 ReservationExpiryScheduler.class (2.43 KB)
│   │   │       ├── 📁 security/
│   │   │       │   ├── 📄 CustomUserDetails.class (3.99 KB)
│   │   │       │   ├── 📄 JwtAuthenticationFilter.class (3.77 KB)
│   │   │       │   ├── 📄 JwtUtil.class (4.52 KB)
│   │   │       │   └── 📄 SecurityConfig.class (8.14 KB)
│   │   │       ├── 📁 seeder/
│   │   │       │   ├── 📄 AdminSeeder.class (3.16 KB)
│   │   │       │   ├── 📄 DemoDataSeeder.class (14.1 KB)
│   │   │       │   └── 📄 RoleSeeder.class (1.64 KB)
│   │   │       ├── 📁 service/
│   │   │       │   ├── 📄 AdminAnalyticsService.class (4.03 KB)
│   │   │       │   ├── 📄 AuthService.class (5.74 KB)
│   │   │       │   ├── 📄 CustomUserDetailsService.class (2.48 KB)
│   │   │       │   ├── 📄 DemoPaymentService.class (7.53 KB)
│   │   │       │   ├── 📄 DemoPaymentServiceImpl.class (2.33 KB)
│   │   │       │   ├── 📄 EmailService.class (3.15 KB)
│   │   │       │   ├── 📄 ParkingSlotService.class (3.99 KB)
│   │   │       │   ├── 📄 ParkingZoneService.class (5.49 KB)
│   │   │       │   ├── 📄 PaymentService.class (454 B)
│   │   │       │   ├── 📄 PricingService.class (3.35 KB)
│   │   │       │   ├── 📄 QRCodeService.class (5.47 KB)
│   │   │       │   ├── 📄 ReservationService.class (9.02 KB)
│   │   │       │   └── 📄 UserService.class (3.79 KB)
│   │   │       ├── 📁 specification/
│   │   │       │   └── 📄 ReservationSpecs.class (6.46 KB)
│   │   │       ├── 📁 util/
│   │   │       │   ├── 📄 ParkingZoneMapper.class (1.51 KB)
│   │   │       │   ├── 📄 ReservationMapper.class (2.64 KB)
│   │   │       │   ├── 📄 SlotMapper.class (1.49 KB)
│   │   │       │   └── 📄 UserMapper.class (2.71 KB)
│   │   │       └── 📄 ParkEaseApplication.class (810 B)
│   │   ├── 📁 META-INF/
│   │   │   └── 📄 additional-spring-configuration-metadata.json
│   │   └── 📄 application.properties (3.5 KB)
│   ├── 📁 generated-sources/
│   │   └── 📁 annotations/
│   ├── 📁 generated-test-sources/
│   │   └── 📁 test-annotations/
│   └── 📁 test-classes/
│       └── 📁 com/
│           ├── 📁 parkease/
│           │   └── 📄 ParkEaseApplicationTests.class (535 B)
│           └── 📁 parkingzone_system/
│               └── 📁 demo/
├── 📁 uploads/
│   └── 📁 qrcodes/
│       └── 📄 qrcode_garage1_slot1.png (2.93 KB)
├── 📄 mvnw (10.67 KB)
├── 📄 mvnw.cmd (6.9 KB)
├── 📄 ParkEase_Postman_Collection.json (23.18 KB)
├── 📄 pom.xml (5.51 KB)
├── 📄 POSTMAN_COLLECTION_GUIDE.md (9.34 KB)
└── 📄 README.md (6.89 KB)
```

## 📑 Table of Contents

**Project Files:**

- [📄 logs/parkease.log](#📄-logs-parkease-log)
- [📄 src/main/java/com/parkease/config/CorsConfig.java](#📄-src-main-java-com-parkease-config-corsconfig-java)
- [📄 src/main/java/com/parkease/config/EmailConfig.java](#📄-src-main-java-com-parkease-config-emailconfig-java)
- [📄 src/main/java/com/parkease/config/SchedulerConfig.java](#📄-src-main-java-com-parkease-config-schedulerconfig-java)
- [📄 src/main/java/com/parkease/config/WebSocketConfig.java](#📄-src-main-java-com-parkease-config-websocketconfig-java)
- [📄 src/main/java/com/parkease/controller/AdminController.java](#📄-src-main-java-com-parkease-controller-admincontroller-java)
- [📄 src/main/java/com/parkease/controller/AuthController.java](#📄-src-main-java-com-parkease-controller-authcontroller-java)
- [📄 src/main/java/com/parkease/controller/DemoPaymentController.java](#📄-src-main-java-com-parkease-controller-demopaymentcontroller-java)
- [📄 src/main/java/com/parkease/controller/HealthController.java](#📄-src-main-java-com-parkease-controller-healthcontroller-java)
- [📄 src/main/java/com/parkease/controller/ParkingSlotController.java](#📄-src-main-java-com-parkease-controller-parkingslotcontroller-java)
- [📄 src/main/java/com/parkease/controller/PaymentController.java](#📄-src-main-java-com-parkease-controller-paymentcontroller-java)
- [📄 src/main/java/com/parkease/controller/PricingController.java](#📄-src-main-java-com-parkease-controller-pricingcontroller-java)
- [📄 src/main/java/com/parkease/controller/TestController.java](#📄-src-main-java-com-parkease-controller-testcontroller-java)
- [📄 src/main/java/com/parkease/controller/UserController.java](#📄-src-main-java-com-parkease-controller-usercontroller-java)
- [📄 src/main/java/com/parkease/controller/WebSocketController.java](#📄-src-main-java-com-parkease-controller-websocketcontroller-java)
- [📄 src/main/java/com/parkease/dto/request/ForgotPasswordRequest.java](#📄-src-main-java-com-parkease-dto-request-forgotpasswordrequest-java)
- [📄 src/main/java/com/parkease/dto/request/LoginRequest.java](#📄-src-main-java-com-parkease-dto-request-loginrequest-java)
- [📄 src/main/java/com/parkease/dto/request/ParkingZoneDto.java](#📄-src-main-java-com-parkease-dto-request-parkingzonedto-java)
- [📄 src/main/java/com/parkease/dto/request/PaymentRequest.java](#📄-src-main-java-com-parkease-dto-request-paymentrequest-java)
- [📄 src/main/java/com/parkease/dto/request/RegisterRequest.java](#📄-src-main-java-com-parkease-dto-request-registerrequest-java)
- [📄 src/main/java/com/parkease/dto/request/ReservationRequest.java](#📄-src-main-java-com-parkease-dto-request-reservationrequest-java)
- [📄 src/main/java/com/parkease/dto/request/ResetPasswordRequest.java](#📄-src-main-java-com-parkease-dto-request-resetpasswordrequest-java)
- [📄 src/main/java/com/parkease/dto/request/SlotDto.java](#📄-src-main-java-com-parkease-dto-request-slotdto-java)
- [📄 src/main/java/com/parkease/dto/request/UpdateProfileRequest.java](#📄-src-main-java-com-parkease-dto-request-updateprofilerequest-java)
- [📄 src/main/java/com/parkease/dto/request/VehicleDto.java](#📄-src-main-java-com-parkease-dto-request-vehicledto-java)
- [📄 src/main/java/com/parkease/dto/response/AdminStatsResponse.java](#📄-src-main-java-com-parkease-dto-response-adminstatsresponse-java)
- [📄 src/main/java/com/parkease/dto/response/LoginResponse.java](#📄-src-main-java-com-parkease-dto-response-loginresponse-java)
- [📄 src/main/java/com/parkease/dto/response/ParkingZoneResponseDto.java](#📄-src-main-java-com-parkease-dto-response-parkingzoneresponsedto-java)
- [📄 src/main/java/com/parkease/dto/response/RegisterUserResponseDto.java](#📄-src-main-java-com-parkease-dto-response-registeruserresponsedto-java)
- [📄 src/main/java/com/parkease/dto/response/ReservationResponseDto.java](#📄-src-main-java-com-parkease-dto-response-reservationresponsedto-java)
- [📄 src/main/java/com/parkease/dto/response/SlotResponseDto.java](#📄-src-main-java-com-parkease-dto-response-slotresponsedto-java)
- [📄 src/main/java/com/parkease/dto/response/UserResponseDto.java](#📄-src-main-java-com-parkease-dto-response-userresponsedto-java)
- [📄 src/main/java/com/parkease/dto/response/VehicleResponseDto.java](#📄-src-main-java-com-parkease-dto-response-vehicleresponsedto-java)
- [📄 src/main/java/com/parkease/dto/websocket/ReservationUpdate.java](#📄-src-main-java-com-parkease-dto-websocket-reservationupdate-java)
- [📄 src/main/java/com/parkease/dto/websocket/SlotStatusUpdate.java](#📄-src-main-java-com-parkease-dto-websocket-slotstatusupdate-java)
- [📄 src/main/java/com/parkease/dto/AdminStatsResponse.java](#📄-src-main-java-com-parkease-dto-adminstatsresponse-java)
- [📄 src/main/java/com/parkease/entity/BasePrice.java](#📄-src-main-java-com-parkease-entity-baseprice-java)
- [📄 src/main/java/com/parkease/entity/ParkingSlot.java](#📄-src-main-java-com-parkease-entity-parkingslot-java)
- [📄 src/main/java/com/parkease/entity/ParkingZone.java](#📄-src-main-java-com-parkease-entity-parkingzone-java)
- [📄 src/main/java/com/parkease/entity/PaymentTransaction.java](#📄-src-main-java-com-parkease-entity-paymenttransaction-java)
- [📄 src/main/java/com/parkease/entity/Reservation.java](#📄-src-main-java-com-parkease-entity-reservation-java)
- [📄 src/main/java/com/parkease/entity/Role.java](#📄-src-main-java-com-parkease-entity-role-java)
- [📄 src/main/java/com/parkease/entity/User.java](#📄-src-main-java-com-parkease-entity-user-java)
- [📄 src/main/java/com/parkease/entity/Vehicle.java](#📄-src-main-java-com-parkease-entity-vehicle-java)
- [📄 src/main/java/com/parkease/enums/SlotStatus.java](#📄-src-main-java-com-parkease-enums-slotstatus-java)
- [📄 src/main/java/com/parkease/enums/VehicleType.java](#📄-src-main-java-com-parkease-enums-vehicletype-java)
- [📄 src/main/java/com/parkease/exception/BadRequestException.java](#📄-src-main-java-com-parkease-exception-badrequestexception-java)
- [📄 src/main/java/com/parkease/exception/GlobalExceptionHandler.java](#📄-src-main-java-com-parkease-exception-globalexceptionhandler-java)
- [📄 src/main/java/com/parkease/exception/ResourceNotFoundException.java](#📄-src-main-java-com-parkease-exception-resourcenotfoundexception-java)
- [📄 src/main/java/com/parkease/repository/BasePriceRepository.java](#📄-src-main-java-com-parkease-repository-basepricerepository-java)
- [📄 src/main/java/com/parkease/repository/ParkingSlotRepository.java](#📄-src-main-java-com-parkease-repository-parkingslotrepository-java)
- [📄 src/main/java/com/parkease/repository/ParkingZoneRepository.java](#📄-src-main-java-com-parkease-repository-parkingzonerepository-java)
- [📄 src/main/java/com/parkease/repository/PaymentTransactionRepository.java](#📄-src-main-java-com-parkease-repository-paymenttransactionrepository-java)
- [📄 src/main/java/com/parkease/repository/ReservationRepository.java](#📄-src-main-java-com-parkease-repository-reservationrepository-java)
- [📄 src/main/java/com/parkease/repository/RoleRepository.java](#📄-src-main-java-com-parkease-repository-rolerepository-java)
- [📄 src/main/java/com/parkease/repository/UserRepository.java](#📄-src-main-java-com-parkease-repository-userrepository-java)
- [📄 src/main/java/com/parkease/scheduler/ReservationExpiryScheduler.java](#📄-src-main-java-com-parkease-scheduler-reservationexpiryscheduler-java)
- [📄 src/main/java/com/parkease/security/CustomUserDetails.java](#📄-src-main-java-com-parkease-security-customuserdetails-java)
- [📄 src/main/java/com/parkease/security/JwtAuthenticationFilter.java](#📄-src-main-java-com-parkease-security-jwtauthenticationfilter-java)
- [📄 src/main/java/com/parkease/security/JwtUtil.java](#📄-src-main-java-com-parkease-security-jwtutil-java)
- [📄 src/main/java/com/parkease/security/SecurityConfig.java](#📄-src-main-java-com-parkease-security-securityconfig-java)
- [📄 src/main/java/com/parkease/seeder/AdminSeeder.java](#📄-src-main-java-com-parkease-seeder-adminseeder-java)
- [📄 src/main/java/com/parkease/seeder/DemoDataSeeder.java](#📄-src-main-java-com-parkease-seeder-demodataseeder-java)
- [📄 src/main/java/com/parkease/seeder/RoleSeeder.java](#📄-src-main-java-com-parkease-seeder-roleseeder-java)
- [📄 src/main/java/com/parkease/service/AdminAnalyticsService.java](#📄-src-main-java-com-parkease-service-adminanalyticsservice-java)
- [📄 src/main/java/com/parkease/service/AuthService.java](#📄-src-main-java-com-parkease-service-authservice-java)
- [📄 src/main/java/com/parkease/service/CustomUserDetailsService.java](#📄-src-main-java-com-parkease-service-customuserdetailsservice-java)
- [📄 src/main/java/com/parkease/service/DemoPaymentService.java](#📄-src-main-java-com-parkease-service-demopaymentservice-java)
- [📄 src/main/java/com/parkease/service/DemoPaymentServiceImpl.java](#📄-src-main-java-com-parkease-service-demopaymentserviceimpl-java)
- [📄 src/main/java/com/parkease/service/EmailService.java](#📄-src-main-java-com-parkease-service-emailservice-java)
- [📄 src/main/java/com/parkease/service/ParkingSlotService.java](#📄-src-main-java-com-parkease-service-parkingslotservice-java)
- [📄 src/main/java/com/parkease/service/ParkingZoneService.java](#📄-src-main-java-com-parkease-service-parkingzoneservice-java)
- [📄 src/main/java/com/parkease/service/PaymentService.java](#📄-src-main-java-com-parkease-service-paymentservice-java)
- [📄 src/main/java/com/parkease/service/PricingService.java](#📄-src-main-java-com-parkease-service-pricingservice-java)
- [📄 src/main/java/com/parkease/service/QRCodeService.java](#📄-src-main-java-com-parkease-service-qrcodeservice-java)
- [📄 src/main/java/com/parkease/service/ReservationService.java](#📄-src-main-java-com-parkease-service-reservationservice-java)
- [📄 src/main/java/com/parkease/service/UserService.java](#📄-src-main-java-com-parkease-service-userservice-java)
- [📄 src/main/java/com/parkease/specification/ReservationSpecs.java](#📄-src-main-java-com-parkease-specification-reservationspecs-java)
- [📄 src/main/java/com/parkease/util/ParkingZoneMapper.java](#📄-src-main-java-com-parkease-util-parkingzonemapper-java)
- [📄 src/main/java/com/parkease/util/ReservationMapper.java](#📄-src-main-java-com-parkease-util-reservationmapper-java)
- [📄 src/main/java/com/parkease/util/SlotMapper.java](#📄-src-main-java-com-parkease-util-slotmapper-java)
- [📄 src/main/java/com/parkease/util/UserMapper.java](#📄-src-main-java-com-parkease-util-usermapper-java)
- [📄 src/main/java/com/parkease/ParkEaseApplication.java](#📄-src-main-java-com-parkease-parkeaseapplication-java)
- [📄 src/main/resources/META-INF/additional-spring-configuration-metadata.json](#📄-src-main-resources-meta-inf-additional-spring-configuration-metadata-json)
- [📄 src/main/resources/application.properties](#📄-src-main-resources-application-properties)
- [📄 src/test/java/com/parkease/ParkEaseApplicationTests.java](#📄-src-test-java-com-parkease-parkeaseapplicationtests-java)
- [📄 target/classes/META-INF/additional-spring-configuration-metadata.json](#📄-target-classes-meta-inf-additional-spring-configuration-metadata-json)
- [📄 target/classes/application.properties](#📄-target-classes-application-properties)
- [📄 mvnw.cmd](#📄-mvnw-cmd)
- [📄 ParkEase_Postman_Collection.json](#📄-parkease-postman-collection-json)
- [📄 pom.xml](#📄-pom-xml)
- [📄 POSTMAN_COLLECTION_GUIDE.md](#📄-postman-collection-guide-md)
- [📄 README.md](#📄-readme-md)

---

## 📈 Project Statistics

| Metric | Count |
|--------|-------|
| Total Files | 182 |
| Total Directories | 63 |
| Text Files | 93 |
| Binary Files | 89 |
| Total Size | 1.04 MB |

### 📄 File Types Distribution

| Extension | Count |
|-----------|-------|
| `.class` | 86 |
| `.java` | 83 |
| `.json` | 3 |
| `.png` | 2 |
| `.properties` | 2 |
| `.md` | 2 |
| `.log` | 1 |
| `no extension` | 1 |
| `.cmd` | 1 |
| `.xml` | 1 |

## 💻 File Code Contents

### <a id="📄-logs-parkease-log"></a>📄 `logs/parkease.log`

**File Info:**
- **Size**: 611.8 KB
- **Extension**: `.log`
- **Language**: `text`
- **Location**: `logs/parkease.log`
- **Relative Path**: `logs`
- **Created**: 2026-01-27 07:58:33 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-27 13:19:01 (Asia/Calcutta / GMT+06:30)
- **MD5**: `0045f08fca0415c87dba95ecda38f7db`
- **SHA256**: `050be7e6733b86ccd643c98090f66fd55008bd1af2d73699f228d7e84aa80963`
- **Encoding**: ASCII

**File code content:**

```text
2026-01-27T13:28:34.080+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Starting ParkEaseApplication using Java 23.0.1 with PID 32424 (A:\Project_F\backend\target\classes started by ashis in A:\Project_F\backend)
2026-01-27T13:28:34.086+05:30 DEBUG 32424 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Running with Spring Boot v3.4.1, Spring v6.2.1
2026-01-27T13:28:34.088+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : The following 1 profile is active: "dev"
2026-01-27T13:28:34.254+05:30  INFO 32424 --- [parkease] [restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : Devtools property defaults active! Set 'spring.devtools.add-properties' to 'false' to disable
2026-01-27T13:28:34.254+05:30  INFO 32424 --- [parkease] [restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : For additional web related logging consider setting the 'logging.level.web' property to 'DEBUG'
2026-01-27T13:28:37.279+05:30  INFO 32424 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2026-01-27T13:28:37.479+05:30  INFO 32424 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 177 ms. Found 7 JPA repository interfaces.
2026-01-27T13:28:40.080+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8080 (http)
2026-01-27T13:28:40.105+05:30  INFO 32424 --- [parkease] [restartedMain] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2026-01-27T13:28:40.105+05:30  INFO 32424 --- [parkease] [restartedMain] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.34]
2026-01-27T13:28:40.222+05:30  INFO 32424 --- [parkease] [restartedMain] o.a.c.c.C.[Tomcat].[localhost].[/api]    : Initializing Spring embedded WebApplicationContext
2026-01-27T13:28:40.223+05:30  INFO 32424 --- [parkease] [restartedMain] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 5967 ms
2026-01-27T13:28:41.802+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer
2026-01-27T13:28:41.876+05:30  INFO 32424 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
2026-01-27T13:28:42.318+05:30  INFO 32424 --- [parkease] [restartedMain] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection org.postgresql.jdbc.PgConnection@6b677c84
2026-01-27T13:28:42.321+05:30  INFO 32424 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
2026-01-27T13:28:42.408+05:30  WARN 32424 --- [parkease] [restartedMain] org.hibernate.orm.deprecation            : HHH90000025: PostgreSQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
2026-01-27T13:28:44.956+05:30  INFO 32424 --- [parkease] [restartedMain] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T13:28:45.785+05:30 DEBUG 32424 --- [parkease] [restartedMain] c.p.security.JwtAuthenticationFilter     : Filter 'jwtAuthenticationFilter' configured for use
2026-01-27T13:28:45.958+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.d.j.r.query.QueryEnhancerFactory     : Hibernate is in classpath; If applicable, HQL parser will be used.
2026-01-27T13:28:49.017+05:30  INFO 32424 --- [parkease] [restartedMain] eAuthenticationProviderManagerConfigurer : Global AuthenticationManager configured with AuthenticationProvider bean with name authenticationProvider
2026-01-27T13:28:49.019+05:30  WARN 32424 --- [parkease] [restartedMain] r$InitializeUserDetailsManagerConfigurer : Global AuthenticationManager configured with an AuthenticationProvider bean. UserDetailsService beans will not be used by Spring Security for automatically configuring username/password login. Consider removing the AuthenticationProvider bean. Alternatively, consider using the UserDetailsService in a manually instantiated DaoAuthenticationProvider. If the current configuration is intentional, to turn off this warning, increase the logging level of 'org.springframework.security.config.annotation.authentication.configuration.InitializeUserDetailsBeanManagerConfigurer' to ERROR
2026-01-27T13:28:50.854+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.b.a.e.web.EndpointLinksResolver      : Exposing 1 endpoint beneath base path '/actuator'
2026-01-27T13:28:51.350+05:30  WARN 32424 --- [parkease] [restartedMain] ion$DefaultTemplateResolverConfiguration : Cannot find template location: classpath:/templates/ (please add some templates, check your Thymeleaf configuration, or set spring.thymeleaf.check-template-location=false)
2026-01-27T13:28:52.053+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729
2026-01-27T13:28:52.166+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Starting...
2026-01-27T13:28:52.168+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=true, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@2f46530b]]
2026-01-27T13:28:52.170+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Started.
2026-01-27T13:28:52.218+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8080 (http) with context path '/api'
2026-01-27T13:28:52.256+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Started ParkEaseApplication in 19.382 seconds (process running for 20.96)
2026-01-27T13:28:52.823+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : <<<< FORCE-RESEEDING DEMO DATA >>>>
2026-01-27T13:28:52.854+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : ✅ Database cleaned
2026-01-27T13:28:52.891+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Base prices seeded for all vehicle types
2026-01-27T13:28:54.208+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 10 demo users
2026-01-27T13:28:54.239+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 4 parking zones
2026-01-27T13:28:54.255+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Downtown Parking
2026-01-27T13:28:54.260+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Mall Parking
2026-01-27T13:28:54.266+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Airport Parking
2026-01-27T13:28:54.273+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Hospital Parking
2026-01-27T13:28:54.391+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 80 new parking slots
2026-01-27T13:28:54.425+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 0: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:28:54.426+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 2: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:28:54.426+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 3: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:28:54.427+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 4: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:28:54.428+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 6: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:28:54.428+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 7: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:28:54.428+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 8: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:28:54.429+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 12: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:28:54.429+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 13: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:28:54.430+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 17: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:28:54.430+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 18: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:28:54.430+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 19: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:28:54.430+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 20: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:28:54.431+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 32: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:28:54.431+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 35: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:28:54.431+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 39: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:28:54.432+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 42: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:28:54.432+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 46: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:28:54.432+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 49: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:28:54.554+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 31 demo reservations
2026-01-27T13:28:54.555+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : ✅ Demo data seeding completed successfully
2026-01-27T13:28:54.564+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Zone Count: 4
2026-01-27T13:28:54.574+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Slot Count: 80
2026-01-27T13:29:52.140+05:30  INFO 32424 --- [parkease] [MessageBroker-2] o.s.w.s.c.WebSocketMessageBrokerStats    : WebSocketSession[0 current WS(0)-HttpStream(0)-HttpPoll(0), 0 total, 0 closed abnormally (0 connect failure, 0 send limit, 0 transport error)], stompSubProtocol[processed CONNECT(0)-CONNECTED(0)-DISCONNECT(0)], stompBrokerRelay[null], inboundChannel[pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0], outboundChannel[pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0], sockJsScheduler[pool size = 3, active threads = 1, queued tasks = 1, completed tasks = 1]
2026-01-27T13:33:15.039+05:30  INFO 32424 --- [parkease] [File Watcher] rtingClassPathChangeChangedEventListener : Restarting due to 87 class path changes (0 additions, 87 deletions, 0 modifications)
2026-01-27T13:33:15.552+05:30  INFO 32424 --- [parkease] [Thread-5] o.s.b.w.e.tomcat.GracefulShutdown        : Commencing graceful shutdown. Waiting for active requests to complete
2026-01-27T13:33:15.898+05:30  INFO 32424 --- [parkease] [tomcat-shutdown] o.s.b.w.e.tomcat.GracefulShutdown        : Graceful shutdown complete
2026-01-27T13:33:15.938+05:30  INFO 32424 --- [parkease] [Thread-5] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopping...
2026-01-27T13:33:15.941+05:30  INFO 32424 --- [parkease] [Thread-5] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=false, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@2f46530b]]
2026-01-27T13:33:15.942+05:30  INFO 32424 --- [parkease] [Thread-5] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopped.
2026-01-27T13:33:16.104+05:30  INFO 32424 --- [parkease] [Thread-5] j.LocalContainerEntityManagerFactoryBean : Closing JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T13:33:16.336+05:30  INFO 32424 --- [parkease] [Thread-5] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown initiated...
2026-01-27T13:33:16.439+05:30  INFO 32424 --- [parkease] [Thread-5] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown completed.
2026-01-27T13:33:17.482+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Starting ParkEaseApplication using Java 23.0.1 with PID 32424 (A:\Project_F\backend\target\classes started by ashis in A:\Project_F\backend)
2026-01-27T13:33:17.482+05:30 DEBUG 32424 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Running with Spring Boot v3.4.1, Spring v6.2.1
2026-01-27T13:33:17.483+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : The following 1 profile is active: "dev"
2026-01-27T13:33:19.530+05:30  INFO 32424 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2026-01-27T13:33:19.627+05:30  INFO 32424 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 95 ms. Found 7 JPA repository interfaces.
2026-01-27T13:33:20.712+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8080 (http)
2026-01-27T13:33:20.718+05:30  INFO 32424 --- [parkease] [restartedMain] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2026-01-27T13:33:20.719+05:30  INFO 32424 --- [parkease] [restartedMain] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.34]
2026-01-27T13:33:20.811+05:30  INFO 32424 --- [parkease] [restartedMain] o.a.c.c.C.[Tomcat].[localhost].[/api]    : Initializing Spring embedded WebApplicationContext
2026-01-27T13:33:20.812+05:30  INFO 32424 --- [parkease] [restartedMain] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 3317 ms
2026-01-27T13:33:21.225+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer
2026-01-27T13:33:21.229+05:30  INFO 32424 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-2 - Starting...
2026-01-27T13:33:21.487+05:30  INFO 32424 --- [parkease] [restartedMain] com.zaxxer.hikari.pool.HikariPool        : HikariPool-2 - Added connection org.postgresql.jdbc.PgConnection@7882f154
2026-01-27T13:33:21.488+05:30  INFO 32424 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-2 - Start completed.
2026-01-27T13:33:21.549+05:30  WARN 32424 --- [parkease] [restartedMain] org.hibernate.orm.deprecation            : HHH90000025: PostgreSQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
2026-01-27T13:33:22.826+05:30  INFO 32424 --- [parkease] [restartedMain] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T13:33:23.388+05:30 DEBUG 32424 --- [parkease] [restartedMain] c.p.security.JwtAuthenticationFilter     : Filter 'jwtAuthenticationFilter' configured for use
2026-01-27T13:33:24.227+05:30  INFO 32424 --- [parkease] [restartedMain] eAuthenticationProviderManagerConfigurer : Global AuthenticationManager configured with AuthenticationProvider bean with name authenticationProvider
2026-01-27T13:33:24.228+05:30  WARN 32424 --- [parkease] [restartedMain] r$InitializeUserDetailsManagerConfigurer : Global AuthenticationManager configured with an AuthenticationProvider bean. UserDetailsService beans will not be used by Spring Security for automatically configuring username/password login. Consider removing the AuthenticationProvider bean. Alternatively, consider using the UserDetailsService in a manually instantiated DaoAuthenticationProvider. If the current configuration is intentional, to turn off this warning, increase the logging level of 'org.springframework.security.config.annotation.authentication.configuration.InitializeUserDetailsBeanManagerConfigurer' to ERROR
2026-01-27T13:33:25.752+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.b.a.e.web.EndpointLinksResolver      : Exposing 1 endpoint beneath base path '/actuator'
2026-01-27T13:33:26.148+05:30  WARN 32424 --- [parkease] [restartedMain] ion$DefaultTemplateResolverConfiguration : Cannot find template location: classpath:/templates/ (please add some templates, check your Thymeleaf configuration, or set spring.thymeleaf.check-template-location=false)
2026-01-27T13:33:27.020+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729
2026-01-27T13:33:27.102+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Starting...
2026-01-27T13:33:27.103+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=true, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@49fa4309]]
2026-01-27T13:33:27.104+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Started.
2026-01-27T13:33:27.117+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8080 (http) with context path '/api'
2026-01-27T13:33:27.176+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Started ParkEaseApplication in 9.931 seconds (process running for 295.88)
2026-01-27T13:33:27.226+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : <<<< FORCE-RESEEDING DEMO DATA >>>>
2026-01-27T13:33:27.266+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : ✅ Database cleaned
2026-01-27T13:33:27.332+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Base prices seeded for all vehicle types
2026-01-27T13:33:28.325+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Admin user seeded
2026-01-27T13:33:28.713+05:30  INFO 32424 --- [parkease] [File Watcher] rtingClassPathChangeChangedEventListener : Restarting due to 87 class path changes (87 additions, 0 deletions, 0 modifications)
2026-01-27T13:33:28.720+05:30  INFO 32424 --- [parkease] [Thread-7] o.s.b.w.e.tomcat.GracefulShutdown        : Commencing graceful shutdown. Waiting for active requests to complete
2026-01-27T13:33:28.778+05:30  INFO 32424 --- [parkease] [tomcat-shutdown] o.s.b.w.e.tomcat.GracefulShutdown        : Graceful shutdown complete
2026-01-27T13:33:28.781+05:30  INFO 32424 --- [parkease] [Thread-7] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopping...
2026-01-27T13:33:28.781+05:30  INFO 32424 --- [parkease] [Thread-7] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=false, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@49fa4309]]
2026-01-27T13:33:28.782+05:30  INFO 32424 --- [parkease] [Thread-7] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopped.
2026-01-27T13:33:28.793+05:30  INFO 32424 --- [parkease] [Thread-7] j.LocalContainerEntityManagerFactoryBean : Closing JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T13:33:28.799+05:30  INFO 32424 --- [parkease] [Thread-7] com.zaxxer.hikari.HikariDataSource       : HikariPool-2 - Shutdown initiated...
2026-01-27T13:33:28.813+05:30  INFO 32424 --- [parkease] [Thread-7] com.zaxxer.hikari.HikariDataSource       : HikariPool-2 - Shutdown completed.
2026-01-27T13:33:29.007+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Starting ParkEaseApplication using Java 23.0.1 with PID 32424 (A:\Project_F\backend\target\classes started by ashis in A:\Project_F\backend)
2026-01-27T13:33:29.008+05:30 DEBUG 32424 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Running with Spring Boot v3.4.1, Spring v6.2.1
2026-01-27T13:33:29.009+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : The following 1 profile is active: "dev"
2026-01-27T13:33:30.357+05:30  INFO 32424 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2026-01-27T13:33:30.434+05:30  INFO 32424 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 73 ms. Found 7 JPA repository interfaces.
2026-01-27T13:33:30.672+05:30  WARN 32424 --- [parkease] [restartedMain] com.zaxxer.hikari.pool.ProxyConnection   : HikariPool-2 - Connection org.postgresql.jdbc.PgConnection@7882f154 marked as broken because of SQLSTATE(08003), ErrorCode(0)

org.postgresql.util.PSQLException: This connection has been closed.
	at org.postgresql.jdbc.PgConnection.checkClosed(PgConnection.java:1009) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgConnection.rollback(PgConnection.java:1016) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyConnection.rollback(ProxyConnection.java:386) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyConnection.rollback(HikariProxyConnection.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.resource.jdbc.internal.AbstractLogicalConnectionImplementor.rollback(AbstractLogicalConnectionImplementor.java:127) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.resource.transaction.backend.jdbc.internal.JdbcResourceLocalTransactionCoordinatorImpl$TransactionDriverControlImpl.rollback(JdbcResourceLocalTransactionCoordinatorImpl.java:289) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.engine.transaction.internal.TransactionImpl.rollback(TransactionImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.JpaTransactionManager.doRollback(JpaTransactionManager.java:589) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.transaction.support.AbstractPlatformTransactionManager.processRollback(AbstractPlatformTransactionManager.java:897) ~[spring-tx-6.2.1.jar:6.2.1]
	at org.springframework.transaction.support.AbstractPlatformTransactionManager.rollback(AbstractPlatformTransactionManager.java:866) ~[spring-tx-6.2.1.jar:6.2.1]
	at org.springframework.transaction.interceptor.TransactionAspectSupport.completeTransactionAfterThrowing(TransactionAspectSupport.java:716) ~[spring-tx-6.2.1.jar:6.2.1]
	at org.springframework.transaction.interceptor.TransactionAspectSupport.invokeWithinTransaction(TransactionAspectSupport.java:384) ~[spring-tx-6.2.1.jar:6.2.1]
	at org.springframework.transaction.interceptor.TransactionInterceptor.invoke(TransactionInterceptor.java:119) ~[spring-tx-6.2.1.jar:6.2.1]
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:184) ~[spring-aop-6.2.1.jar:6.2.1]
	at org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:727) ~[spring-aop-6.2.1.jar:6.2.1]
	at com.parkease.seeder.DemoDataSeeder$$SpringCGLIB$$0.run(<generated>) ~[classes/:na]
	at org.springframework.boot.SpringApplication.lambda$callRunner$5(SpringApplication.java:788) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.util.function.ThrowingConsumer$1.acceptWithException(ThrowingConsumer.java:82) ~[spring-core-6.2.1.jar:6.2.1]
	at org.springframework.util.function.ThrowingConsumer.accept(ThrowingConsumer.java:60) ~[spring-core-6.2.1.jar:6.2.1]
	at org.springframework.util.function.ThrowingConsumer$1.accept(ThrowingConsumer.java:86) ~[spring-core-6.2.1.jar:6.2.1]
	at org.springframework.boot.SpringApplication.callRunner(SpringApplication.java:796) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.callRunner(SpringApplication.java:787) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.lambda$callRunners$3(SpringApplication.java:772) ~[spring-boot-3.4.1.jar:3.4.1]
	at java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184) ~[na:na]
	at java.base/java.util.stream.SortedOps$SizedRefSortingSink.end(SortedOps.java:357) ~[na:na]
	at java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:571) ~[na:na]
	at java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:560) ~[na:na]
	at java.base/java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151) ~[na:na]
	at java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174) ~[na:na]
	at java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:265) ~[na:na]
	at java.base/java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:636) ~[na:na]
	at org.springframework.boot.SpringApplication.callRunners(SpringApplication.java:772) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:325) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]

2026-01-27T13:33:30.693+05:30 ERROR 32424 --- [parkease] [restartedMain] o.s.t.i.TransactionInterceptor           : Application exception overridden by rollback exception

org.springframework.boot.context.properties.ConfigurationPropertiesBindException: Error creating bean with name 'spring.datasource-org.springframework.boot.autoconfigure.jdbc.DataSourceProperties': Could not bind properties to 'DataSourceProperties' : prefix=spring.datasource, ignoreInvalidFields=false, ignoreUnknownFields=true
	at org.springframework.boot.context.properties.ConfigurationPropertiesBindingPostProcessor.bind(ConfigurationPropertiesBindingPostProcessor.java:99) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.context.properties.ConfigurationPropertiesBindingPostProcessor.postProcessBeforeInitialization(ConfigurationPropertiesBindingPostProcessor.java:79) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyBeanPostProcessorsBeforeInitialization(AbstractAutowireCapableBeanFactory.java:423) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1800) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveAutowiredArgument(ConstructorResolver.java:913) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolvePreparedArguments(ConstructorResolver.java:845) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:452) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveAutowiredArgument(ConstructorResolver.java:913) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolvePreparedArguments(ConstructorResolver.java:845) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:452) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:312) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory$1.orderedStream(DefaultListableBeanFactory.java:503) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.dao.support.PersistenceExceptionTranslationInterceptor.detectPersistenceExceptionTranslators(PersistenceExceptionTranslationInterceptor.java:175) ~[spring-tx-6.2.1.jar:6.2.1]
	at org.springframework.dao.support.PersistenceExceptionTranslationInterceptor.invoke(PersistenceExceptionTranslationInterceptor.java:151) ~[spring-tx-6.2.1.jar:6.2.1]
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:184) ~[spring-aop-6.2.1.jar:6.2.1]
	at org.springframework.data.jpa.repository.support.CrudMethodMetadataPostProcessor$CrudMethodMetadataPopulatingMethodInterceptor.invoke(CrudMethodMetadataPostProcessor.java:165) ~[spring-data-jpa-3.4.1.jar:3.4.1]
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:184) ~[spring-aop-6.2.1.jar:6.2.1]
	at org.springframework.aop.framework.JdkDynamicAopProxy.invoke(JdkDynamicAopProxy.java:223) ~[spring-aop-6.2.1.jar:6.2.1]
	at jdk.proxy6/jdk.proxy6.$Proxy214.saveAll(Unknown Source) ~[na:na]
	at com.parkease.seeder.DemoDataSeeder.seedDemoUsers(DemoDataSeeder.java:170) ~[classes/:na]
	at com.parkease.seeder.DemoDataSeeder.run(DemoDataSeeder.java:77) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.aop.support.AopUtils.invokeJoinpointUsingReflection(AopUtils.java:359) ~[spring-aop-6.2.1.jar:6.2.1]
	at org.springframework.aop.framework.ReflectiveMethodInvocation.invokeJoinpoint(ReflectiveMethodInvocation.java:196) ~[spring-aop-6.2.1.jar:6.2.1]
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:163) ~[spring-aop-6.2.1.jar:6.2.1]
	at org.springframework.transaction.interceptor.TransactionAspectSupport.invokeWithinTransaction(TransactionAspectSupport.java:380) ~[spring-tx-6.2.1.jar:6.2.1]
	at org.springframework.transaction.interceptor.TransactionInterceptor.invoke(TransactionInterceptor.java:119) ~[spring-tx-6.2.1.jar:6.2.1]
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:184) ~[spring-aop-6.2.1.jar:6.2.1]
	at org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:727) ~[spring-aop-6.2.1.jar:6.2.1]
	at com.parkease.seeder.DemoDataSeeder$$SpringCGLIB$$0.run(<generated>) ~[classes/:na]
	at org.springframework.boot.SpringApplication.lambda$callRunner$5(SpringApplication.java:788) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.util.function.ThrowingConsumer$1.acceptWithException(ThrowingConsumer.java:82) ~[spring-core-6.2.1.jar:6.2.1]
	at org.springframework.util.function.ThrowingConsumer.accept(ThrowingConsumer.java:60) ~[spring-core-6.2.1.jar:6.2.1]
	at org.springframework.util.function.ThrowingConsumer$1.accept(ThrowingConsumer.java:86) ~[spring-core-6.2.1.jar:6.2.1]
	at org.springframework.boot.SpringApplication.callRunner(SpringApplication.java:796) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.callRunner(SpringApplication.java:787) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.lambda$callRunners$3(SpringApplication.java:772) ~[spring-boot-3.4.1.jar:3.4.1]
	at java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184) ~[na:na]
	at java.base/java.util.stream.SortedOps$SizedRefSortingSink.end(SortedOps.java:357) ~[na:na]
	at java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:571) ~[na:na]
	at java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:560) ~[na:na]
	at java.base/java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151) ~[na:na]
	at java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174) ~[na:na]
	at java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:265) ~[na:na]
	at java.base/java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:636) ~[na:na]
	at org.springframework.boot.SpringApplication.callRunners(SpringApplication.java:772) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:325) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: java.lang.IllegalStateException: org.springframework.boot.web.servlet.context.AnnotationConfigServletWebServerApplicationContext@2650509b has been closed already
	at org.springframework.context.support.AbstractApplicationContext.assertBeanFactoryActive(AbstractApplicationContext.java:1256) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.context.support.AbstractApplicationContext.getBean(AbstractApplicationContext.java:1277) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.context.properties.BoundConfigurationProperties.get(BoundConfigurationProperties.java:76) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.context.properties.ConfigurationPropertiesBinder.getHandler(ConfigurationPropertiesBinder.java:144) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.context.properties.ConfigurationPropertiesBinder.getBindHandler(ConfigurationPropertiesBinder.java:113) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.context.properties.ConfigurationPropertiesBinder.bind(ConfigurationPropertiesBinder.java:93) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.context.properties.ConfigurationPropertiesBindingPostProcessor.bind(ConfigurationPropertiesBindingPostProcessor.java:96) ~[spring-boot-3.4.1.jar:3.4.1]
	... 81 common frames omitted

2026-01-27T13:33:30.711+05:30  INFO 32424 --- [parkease] [restartedMain] .s.b.a.l.ConditionEvaluationReportLogger : 

Error starting ApplicationContext. To display the condition evaluation report re-run your application with 'debug' enabled.
2026-01-27T13:33:30.787+05:30 ERROR 32424 --- [parkease] [restartedMain] o.s.boot.SpringApplication               : Application run failed

org.springframework.dao.DataAccessResourceFailureException: Hibernate transaction: Unable to rollback against JDBC Connection; This connection has been closed.
	at org.springframework.jdbc.support.SQLStateSQLExceptionTranslator.doTranslate(SQLStateSQLExceptionTranslator.java:121) ~[spring-jdbc-6.2.1.jar:6.2.1]
	at org.springframework.jdbc.support.AbstractFallbackSQLExceptionTranslator.translate(AbstractFallbackSQLExceptionTranslator.java:107) ~[spring-jdbc-6.2.1.jar:6.2.1]
	at org.springframework.jdbc.support.AbstractFallbackSQLExceptionTranslator.translate(AbstractFallbackSQLExceptionTranslator.java:116) ~[spring-jdbc-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.vendor.HibernateJpaDialect.convertHibernateAccessException(HibernateJpaDialect.java:265) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.vendor.HibernateJpaDialect.translateExceptionIfPossible(HibernateJpaDialect.java:241) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.JpaTransactionManager.doRollback(JpaTransactionManager.java:593) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.transaction.support.AbstractPlatformTransactionManager.processRollback(AbstractPlatformTransactionManager.java:897) ~[spring-tx-6.2.1.jar:6.2.1]
	at org.springframework.transaction.support.AbstractPlatformTransactionManager.rollback(AbstractPlatformTransactionManager.java:866) ~[spring-tx-6.2.1.jar:6.2.1]
	at org.springframework.transaction.interceptor.TransactionAspectSupport.completeTransactionAfterThrowing(TransactionAspectSupport.java:716) ~[spring-tx-6.2.1.jar:6.2.1]
	at org.springframework.transaction.interceptor.TransactionAspectSupport.invokeWithinTransaction(TransactionAspectSupport.java:384) ~[spring-tx-6.2.1.jar:6.2.1]
	at org.springframework.transaction.interceptor.TransactionInterceptor.invoke(TransactionInterceptor.java:119) ~[spring-tx-6.2.1.jar:6.2.1]
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:184) ~[spring-aop-6.2.1.jar:6.2.1]
	at org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:727) ~[spring-aop-6.2.1.jar:6.2.1]
	at com.parkease.seeder.DemoDataSeeder$$SpringCGLIB$$0.run(<generated>) ~[classes/:na]
	at org.springframework.boot.SpringApplication.lambda$callRunner$5(SpringApplication.java:788) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.util.function.ThrowingConsumer$1.acceptWithException(ThrowingConsumer.java:82) ~[spring-core-6.2.1.jar:6.2.1]
	at org.springframework.util.function.ThrowingConsumer.accept(ThrowingConsumer.java:60) ~[spring-core-6.2.1.jar:6.2.1]
	at org.springframework.util.function.ThrowingConsumer$1.accept(ThrowingConsumer.java:86) ~[spring-core-6.2.1.jar:6.2.1]
	at org.springframework.boot.SpringApplication.callRunner(SpringApplication.java:796) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.callRunner(SpringApplication.java:787) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.lambda$callRunners$3(SpringApplication.java:772) ~[spring-boot-3.4.1.jar:3.4.1]
	at java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184) ~[na:na]
	at java.base/java.util.stream.SortedOps$SizedRefSortingSink.end(SortedOps.java:357) ~[na:na]
	at java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:571) ~[na:na]
	at java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:560) ~[na:na]
	at java.base/java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151) ~[na:na]
	at java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174) ~[na:na]
	at java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:265) ~[na:na]
	at java.base/java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:636) ~[na:na]
	at org.springframework.boot.SpringApplication.callRunners(SpringApplication.java:772) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:325) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: This connection has been closed.
	at org.postgresql.jdbc.PgConnection.checkClosed(PgConnection.java:1009) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgConnection.rollback(PgConnection.java:1016) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyConnection.rollback(ProxyConnection.java:386) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyConnection.rollback(HikariProxyConnection.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.resource.jdbc.internal.AbstractLogicalConnectionImplementor.rollback(AbstractLogicalConnectionImplementor.java:127) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.resource.transaction.backend.jdbc.internal.JdbcResourceLocalTransactionCoordinatorImpl$TransactionDriverControlImpl.rollback(JdbcResourceLocalTransactionCoordinatorImpl.java:289) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.engine.transaction.internal.TransactionImpl.rollback(TransactionImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.JpaTransactionManager.doRollback(JpaTransactionManager.java:589) ~[spring-orm-6.2.1.jar:6.2.1]
	... 31 common frames omitted

2026-01-27T13:33:30.918+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8080 (http)
2026-01-27T13:33:31.036+05:30  INFO 32424 --- [parkease] [restartedMain] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 2019 ms
2026-01-27T13:33:31.469+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer
2026-01-27T13:33:31.472+05:30  INFO 32424 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-3 - Starting...
2026-01-27T13:33:31.631+05:30  INFO 32424 --- [parkease] [restartedMain] com.zaxxer.hikari.pool.HikariPool        : HikariPool-3 - Added connection org.postgresql.jdbc.PgConnection@2de05c
2026-01-27T13:33:31.632+05:30  INFO 32424 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-3 - Start completed.
2026-01-27T13:33:31.659+05:30  WARN 32424 --- [parkease] [restartedMain] org.hibernate.orm.deprecation            : HHH90000025: PostgreSQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
2026-01-27T13:33:32.485+05:30  INFO 32424 --- [parkease] [restartedMain] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T13:33:32.736+05:30 DEBUG 32424 --- [parkease] [restartedMain] c.p.security.JwtAuthenticationFilter     : Filter 'jwtAuthenticationFilter' configured for use
2026-01-27T13:33:33.068+05:30  INFO 32424 --- [parkease] [restartedMain] eAuthenticationProviderManagerConfigurer : Global AuthenticationManager configured with AuthenticationProvider bean with name authenticationProvider
2026-01-27T13:33:33.069+05:30  WARN 32424 --- [parkease] [restartedMain] r$InitializeUserDetailsManagerConfigurer : Global AuthenticationManager configured with an AuthenticationProvider bean. UserDetailsService beans will not be used by Spring Security for automatically configuring username/password login. Consider removing the AuthenticationProvider bean. Alternatively, consider using the UserDetailsService in a manually instantiated DaoAuthenticationProvider. If the current configuration is intentional, to turn off this warning, increase the logging level of 'org.springframework.security.config.annotation.authentication.configuration.InitializeUserDetailsBeanManagerConfigurer' to ERROR
2026-01-27T13:33:33.926+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.b.a.e.web.EndpointLinksResolver      : Exposing 1 endpoint beneath base path '/actuator'
2026-01-27T13:33:34.146+05:30  WARN 32424 --- [parkease] [restartedMain] ion$DefaultTemplateResolverConfiguration : Cannot find template location: classpath:/templates/ (please add some templates, check your Thymeleaf configuration, or set spring.thymeleaf.check-template-location=false)
2026-01-27T13:33:34.449+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729
2026-01-27T13:33:34.477+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Starting...
2026-01-27T13:33:34.478+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=true, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@fe8afd5]]
2026-01-27T13:33:34.479+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Started.
2026-01-27T13:33:34.486+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8080 (http) with context path '/api'
2026-01-27T13:33:34.497+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Started ParkEaseApplication in 5.553 seconds (process running for 303.201)
2026-01-27T13:33:34.502+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : <<<< FORCE-RESEEDING DEMO DATA >>>>
2026-01-27T13:33:34.513+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : ✅ Database cleaned
2026-01-27T13:33:34.525+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Roles seeded: USER, ADMIN
2026-01-27T13:33:34.541+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Base prices seeded for all vehicle types
2026-01-27T13:33:34.701+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Admin user seeded
2026-01-27T13:33:36.180+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 10 demo users
2026-01-27T13:33:36.208+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 4 parking zones
2026-01-27T13:33:36.218+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Downtown Parking
2026-01-27T13:33:36.223+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Mall Parking
2026-01-27T13:33:36.229+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Airport Parking
2026-01-27T13:33:36.236+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Hospital Parking
2026-01-27T13:33:36.353+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 80 new parking slots
2026-01-27T13:33:36.376+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 2: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.376+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 3: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.376+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 4: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.376+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 5: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.382+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 7: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.383+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 8: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.383+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 9: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.383+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 10: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.383+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 15: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.383+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 20: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.384+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 21: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.384+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 22: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.384+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 25: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.384+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 27: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.384+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 29: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.384+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 32: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.386+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 35: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.386+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 37: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.386+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 39: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.387+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 40: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.387+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 43: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.387+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 44: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.387+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 45: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:33:36.470+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 27 demo reservations
2026-01-27T13:33:36.471+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : ✅ Demo data seeding completed successfully
2026-01-27T13:33:36.476+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Zone Count: 4
2026-01-27T13:33:36.485+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Slot Count: 80
2026-01-27T13:33:36.510+05:30  INFO 32424 --- [parkease] [restartedMain] .ConditionEvaluationDeltaLoggingListener : Condition evaluation unchanged
2026-01-27T13:34:34.509+05:30  INFO 32424 --- [parkease] [MessageBroker-2] o.s.w.s.c.WebSocketMessageBrokerStats    : WebSocketSession[0 current WS(0)-HttpStream(0)-HttpPoll(0), 0 total, 0 closed abnormally (0 connect failure, 0 send limit, 0 transport error)], stompSubProtocol[processed CONNECT(0)-CONNECTED(0)-DISCONNECT(0)], stompBrokerRelay[null], inboundChannel[pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0], outboundChannel[pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0], sockJsScheduler[pool size = 3, active threads = 2, queued tasks = 0, completed tasks = 1]
2026-01-27T13:38:32.404+05:30  INFO 32424 --- [parkease] [File Watcher] rtingClassPathChangeChangedEventListener : Restarting due to 1 class path change (0 additions, 0 deletions, 1 modification)
2026-01-27T13:38:32.669+05:30  INFO 32424 --- [parkease] [Thread-11] j.LocalContainerEntityManagerFactoryBean : Closing JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T13:38:32.720+05:30  INFO 32424 --- [parkease] [Thread-11] com.zaxxer.hikari.HikariDataSource       : HikariPool-3 - Shutdown initiated...
2026-01-27T13:38:32.749+05:30  INFO 32424 --- [parkease] [Thread-11] com.zaxxer.hikari.HikariDataSource       : HikariPool-3 - Shutdown completed.
2026-01-27T13:38:32.751+05:30  INFO 32424 --- [parkease] [restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : Devtools property defaults active! Set 'spring.devtools.add-properties' to 'false' to disable
2026-01-27T13:38:32.754+05:30  INFO 32424 --- [parkease] [restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : For additional web related logging consider setting the 'logging.level.web' property to 'DEBUG'
2026-01-27T13:38:33.329+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Starting ParkEaseApplication using Java 23.0.1 with PID 32424 (A:\Project_F\backend\target\classes started by ashis in A:\Project_F\backend)
2026-01-27T13:38:33.329+05:30 DEBUG 32424 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Running with Spring Boot v3.4.1, Spring v6.2.1
2026-01-27T13:38:33.329+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : The following 1 profile is active: "dev"
2026-01-27T13:38:33.377+05:30  INFO 32424 --- [parkease] [restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : Devtools property defaults active! Set 'spring.devtools.add-properties' to 'false' to disable
2026-01-27T13:38:33.378+05:30  INFO 32424 --- [parkease] [restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : For additional web related logging consider setting the 'logging.level.web' property to 'DEBUG'
2026-01-27T13:38:33.388+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Starting ParkEaseApplication using Java 23.0.1 with PID 32424 (A:\Project_F\backend\target\classes started by ashis in A:\Project_F\backend)
2026-01-27T13:38:33.388+05:30 DEBUG 32424 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Running with Spring Boot v3.4.1, Spring v6.2.1
2026-01-27T13:38:33.388+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : The following 1 profile is active: "dev"
2026-01-27T13:38:34.191+05:30  INFO 32424 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2026-01-27T13:38:34.191+05:30  INFO 32424 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2026-01-27T13:38:34.243+05:30  INFO 32424 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 50 ms. Found 7 JPA repository interfaces.
2026-01-27T13:38:34.243+05:30  INFO 32424 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 50 ms. Found 7 JPA repository interfaces.
2026-01-27T13:38:34.485+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8080 (http)
2026-01-27T13:38:34.485+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8080 (http)
2026-01-27T13:38:34.528+05:30  INFO 32424 --- [parkease] [restartedMain] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1139 ms
2026-01-27T13:38:34.528+05:30  INFO 32424 --- [parkease] [restartedMain] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1181 ms
2026-01-27T13:38:34.704+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer
2026-01-27T13:38:34.704+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer
2026-01-27T13:38:34.707+05:30  INFO 32424 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-4 - Starting...
2026-01-27T13:38:34.707+05:30  INFO 32424 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-5 - Starting...
2026-01-27T13:38:34.815+05:30  INFO 32424 --- [parkease] [restartedMain] com.zaxxer.hikari.pool.HikariPool        : HikariPool-4 - Added connection org.postgresql.jdbc.PgConnection@65921d26
2026-01-27T13:38:34.815+05:30  INFO 32424 --- [parkease] [restartedMain] com.zaxxer.hikari.pool.HikariPool        : HikariPool-5 - Added connection org.postgresql.jdbc.PgConnection@77a495fb
2026-01-27T13:38:34.815+05:30  INFO 32424 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-4 - Start completed.
2026-01-27T13:38:34.815+05:30  INFO 32424 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-5 - Start completed.
2026-01-27T13:38:34.844+05:30  WARN 32424 --- [parkease] [restartedMain] org.hibernate.orm.deprecation            : HHH90000025: PostgreSQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
2026-01-27T13:38:34.844+05:30  WARN 32424 --- [parkease] [restartedMain] org.hibernate.orm.deprecation            : HHH90000025: PostgreSQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
2026-01-27T13:38:35.179+05:30  WARN 32424 --- [parkease] [restartedMain] o.h.t.s.i.ExceptionHandlerLoggedImpl     : GenerationTarget encountered exception accepting command : Error executing DDL "
    create sequence users_seq start with 1 increment by 50" via JDBC [ERROR: duplicate key value violates unique constraint "pg_class_relname_nsp_index"
  Detail: Key (relname, relnamespace)=(users_seq, 2200) already exists.]

org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "
    create sequence users_seq start with 1 increment by 50" via JDBC [ERROR: duplicate key value violates unique constraint "pg_class_relname_nsp_index"
  Detail: Key (relname, relnamespace)=(users_seq, 2200) already exists.]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:94) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlString(Helper.java:233) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlStrings(Helper.java:217) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createSequences(SchemaCreatorImpl.java:467) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createSequencesTablesConstraints(SchemaCreatorImpl.java:331) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createFromMetadata(SchemaCreatorImpl.java:239) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.performCreation(SchemaCreatorImpl.java:172) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:118) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:250) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:144) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at java.base/java.util.HashMap.forEach(HashMap.java:1430) ~[na:na]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:141) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:37) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:35) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:324) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:463) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1506) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:390) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:419) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:400) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:366) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1855) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1707) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1456) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:211) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:174) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:169) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:154) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:87) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getServletContextInitializerBeans(ServletWebServerApplicationContext.java:266) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.selfInitialize(ServletWebServerApplicationContext.java:240) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatStarter.onStartup(TomcatStarter.java:52) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4426) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:772) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:415) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:870) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:437) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:128) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:107) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:516) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:222) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:188) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:752) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:439) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:318) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: ERROR: duplicate key value violates unique constraint "pg_class_relname_nsp_index"
  Detail: Key (relname, relnamespace)=(users_seq, 2200) already exists.
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2733) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2420) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:372) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:517) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:434) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:356) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:341) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:317) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:312) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyStatement.execute(ProxyStatement.java:94) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyStatement.execute(HikariProxyStatement.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:80) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	... 127 common frames omitted

2026-01-27T13:38:35.210+05:30  WARN 32424 --- [parkease] [restartedMain] o.h.t.s.i.ExceptionHandlerLoggedImpl     : GenerationTarget encountered exception accepting command : Error executing DDL "
    create table base_prices (
        price_per_hour float(53) not null,
        id bigint generated by default as identity,
        vehicle_type varchar(255) not null unique check (vehicle_type in ('TWO_WHEELER','SUV','HATCHBACK','MINI_BUS')),
        primary key (id)
    )" via JDBC [ERROR: relation "base_prices" already exists]

org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "
    create table base_prices (
        price_per_hour float(53) not null,
        id bigint generated by default as identity,
        vehicle_type varchar(255) not null unique check (vehicle_type in ('TWO_WHEELER','SUV','HATCHBACK','MINI_BUS')),
        primary key (id)
    )" via JDBC [ERROR: relation "base_prices" already exists]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:94) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlString(Helper.java:233) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlStrings(Helper.java:217) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createTables(SchemaCreatorImpl.java:428) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createSequencesTablesConstraints(SchemaCreatorImpl.java:344) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createFromMetadata(SchemaCreatorImpl.java:239) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.performCreation(SchemaCreatorImpl.java:172) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:118) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:250) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:144) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at java.base/java.util.HashMap.forEach(HashMap.java:1430) ~[na:na]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:141) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:37) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:35) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:324) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:463) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1506) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:390) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:419) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:400) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:366) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1855) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1707) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1456) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:211) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:174) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:169) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:154) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:87) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getServletContextInitializerBeans(ServletWebServerApplicationContext.java:266) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.selfInitialize(ServletWebServerApplicationContext.java:240) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatStarter.onStartup(TomcatStarter.java:52) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4426) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:772) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:415) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:870) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:437) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:128) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:107) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:516) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:222) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:188) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:752) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:439) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:318) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: ERROR: relation "base_prices" already exists
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2733) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2420) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:372) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:517) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:434) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:356) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:341) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:317) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:312) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyStatement.execute(ProxyStatement.java:94) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyStatement.execute(HikariProxyStatement.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:80) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	... 127 common frames omitted

2026-01-27T13:38:35.217+05:30  WARN 32424 --- [parkease] [restartedMain] o.h.t.s.i.ExceptionHandlerLoggedImpl     : GenerationTarget encountered exception accepting command : Error executing DDL "
    create table parking_slots (
        id integer generated by default as identity,
        zone_id integer not null,
        qrcode_path varchar(255),
        slot_number varchar(255) not null,
        status varchar(255) not null check (status in ('AVAILABLE','RESERVED','OCCUPIED')),
        primary key (id)
    )" via JDBC [ERROR: relation "parking_slots" already exists]

org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "
    create table parking_slots (
        id integer generated by default as identity,
        zone_id integer not null,
        qrcode_path varchar(255),
        slot_number varchar(255) not null,
        status varchar(255) not null check (status in ('AVAILABLE','RESERVED','OCCUPIED')),
        primary key (id)
    )" via JDBC [ERROR: relation "parking_slots" already exists]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:94) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlString(Helper.java:233) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlStrings(Helper.java:217) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createTables(SchemaCreatorImpl.java:428) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createSequencesTablesConstraints(SchemaCreatorImpl.java:344) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createFromMetadata(SchemaCreatorImpl.java:239) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.performCreation(SchemaCreatorImpl.java:172) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:118) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:250) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:144) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at java.base/java.util.HashMap.forEach(HashMap.java:1430) ~[na:na]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:141) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:37) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:35) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:324) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:463) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1506) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:390) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:419) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:400) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:366) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1855) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1707) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1456) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:211) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:174) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:169) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:154) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:87) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getServletContextInitializerBeans(ServletWebServerApplicationContext.java:266) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.selfInitialize(ServletWebServerApplicationContext.java:240) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatStarter.onStartup(TomcatStarter.java:52) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4426) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:772) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:415) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:870) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:437) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:128) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:107) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:516) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:222) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:188) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:752) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:439) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:318) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: ERROR: relation "parking_slots" already exists
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2733) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2420) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:372) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:517) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:434) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:356) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:341) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:317) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:312) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyStatement.execute(ProxyStatement.java:94) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyStatement.execute(HikariProxyStatement.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:80) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	... 127 common frames omitted

2026-01-27T13:38:35.223+05:30  WARN 32424 --- [parkease] [restartedMain] o.h.t.s.i.ExceptionHandlerLoggedImpl     : GenerationTarget encountered exception accepting command : Error executing DDL "
    create table parking_zones (
        active boolean not null,
        id integer generated by default as identity,
        total_slots integer not null,
        location varchar(255) not null,
        name varchar(255) not null,
        primary key (id)
    )" via JDBC [ERROR: relation "parking_zones" already exists]

org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "
    create table parking_zones (
        active boolean not null,
        id integer generated by default as identity,
        total_slots integer not null,
        location varchar(255) not null,
        name varchar(255) not null,
        primary key (id)
    )" via JDBC [ERROR: relation "parking_zones" already exists]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:94) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlString(Helper.java:233) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlStrings(Helper.java:217) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createTables(SchemaCreatorImpl.java:428) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createSequencesTablesConstraints(SchemaCreatorImpl.java:344) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createFromMetadata(SchemaCreatorImpl.java:239) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.performCreation(SchemaCreatorImpl.java:172) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:118) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:250) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:144) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at java.base/java.util.HashMap.forEach(HashMap.java:1430) ~[na:na]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:141) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:37) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:35) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:324) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:463) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1506) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:390) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:419) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:400) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:366) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1855) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1707) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1456) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:211) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:174) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:169) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:154) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:87) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getServletContextInitializerBeans(ServletWebServerApplicationContext.java:266) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.selfInitialize(ServletWebServerApplicationContext.java:240) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatStarter.onStartup(TomcatStarter.java:52) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4426) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:772) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:415) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:870) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:437) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:128) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:107) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:516) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:222) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:188) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:752) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:439) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:318) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: ERROR: relation "parking_zones" already exists
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2733) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2420) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:372) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:517) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:434) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:356) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:341) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:317) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:312) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyStatement.execute(ProxyStatement.java:94) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyStatement.execute(HikariProxyStatement.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:80) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	... 127 common frames omitted

2026-01-27T13:38:35.235+05:30  WARN 32424 --- [parkease] [restartedMain] o.h.t.s.i.ExceptionHandlerLoggedImpl     : GenerationTarget encountered exception accepting command : Error executing DDL "
    create table payment_transactions (
        amount float(53) not null,
        id integer generated by default as identity,
        reservation_id integer not null unique,
        transaction_time timestamp(6) not null,
        payment_mode varchar(255) not null,
        status varchar(255) not null check (status in ('SUCCESS','FAILED')),
        primary key (id)
    )" via JDBC [ERROR: relation "payment_transactions" already exists]

org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "
    create table payment_transactions (
        amount float(53) not null,
        id integer generated by default as identity,
        reservation_id integer not null unique,
        transaction_time timestamp(6) not null,
        payment_mode varchar(255) not null,
        status varchar(255) not null check (status in ('SUCCESS','FAILED')),
        primary key (id)
    )" via JDBC [ERROR: relation "payment_transactions" already exists]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:94) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlString(Helper.java:233) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlStrings(Helper.java:217) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createTables(SchemaCreatorImpl.java:428) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createSequencesTablesConstraints(SchemaCreatorImpl.java:344) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createFromMetadata(SchemaCreatorImpl.java:239) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.performCreation(SchemaCreatorImpl.java:172) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:118) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:250) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:144) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at java.base/java.util.HashMap.forEach(HashMap.java:1430) ~[na:na]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:141) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:37) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:35) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:324) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:463) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1506) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:390) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:419) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:400) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:366) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1855) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1707) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1456) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:211) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:174) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:169) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:154) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:87) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getServletContextInitializerBeans(ServletWebServerApplicationContext.java:266) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.selfInitialize(ServletWebServerApplicationContext.java:240) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatStarter.onStartup(TomcatStarter.java:52) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4426) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:772) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:415) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:870) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:437) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:128) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:107) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:516) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:222) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:188) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:752) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:439) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:318) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: ERROR: relation "payment_transactions" already exists
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2733) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2420) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:372) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:517) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:434) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:356) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:341) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:317) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:312) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyStatement.execute(ProxyStatement.java:94) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyStatement.execute(HikariProxyStatement.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:80) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	... 127 common frames omitted

2026-01-27T13:38:35.243+05:30  WARN 32424 --- [parkease] [restartedMain] o.h.t.s.i.ExceptionHandlerLoggedImpl     : GenerationTarget encountered exception accepting command : Error executing DDL "
    create table reservations (
        amount float(53) not null,
        id integer generated by default as identity,
        payment_tx_id integer unique,
        slot_id integer not null,
        user_id integer not null,
        created_at timestamp(6) not null,
        end_time timestamp(6) not null,
        start_time timestamp(6) not null,
        status varchar(255) not null check (status in ('PENDING','CONFIRMED','CANCELLED','EXPIRED')),
        primary key (id)
    )" via JDBC [ERROR: relation "reservations" already exists]

org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "
    create table reservations (
        amount float(53) not null,
        id integer generated by default as identity,
        payment_tx_id integer unique,
        slot_id integer not null,
        user_id integer not null,
        created_at timestamp(6) not null,
        end_time timestamp(6) not null,
        start_time timestamp(6) not null,
        status varchar(255) not null check (status in ('PENDING','CONFIRMED','CANCELLED','EXPIRED')),
        primary key (id)
    )" via JDBC [ERROR: relation "reservations" already exists]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:94) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlString(Helper.java:233) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlStrings(Helper.java:217) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createTables(SchemaCreatorImpl.java:428) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createSequencesTablesConstraints(SchemaCreatorImpl.java:344) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createFromMetadata(SchemaCreatorImpl.java:239) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.performCreation(SchemaCreatorImpl.java:172) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:118) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:250) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:144) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at java.base/java.util.HashMap.forEach(HashMap.java:1430) ~[na:na]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:141) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:37) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:35) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:324) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:463) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1506) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:390) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:419) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:400) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:366) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1855) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1707) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1456) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:211) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:174) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:169) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:154) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:87) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getServletContextInitializerBeans(ServletWebServerApplicationContext.java:266) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.selfInitialize(ServletWebServerApplicationContext.java:240) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatStarter.onStartup(TomcatStarter.java:52) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4426) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:772) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:415) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:870) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:437) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:128) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:107) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:516) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:222) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:188) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:752) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:439) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:318) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: ERROR: relation "reservations" already exists
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2733) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2420) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:372) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:517) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:434) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:356) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:341) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:317) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:312) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyStatement.execute(ProxyStatement.java:94) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyStatement.execute(HikariProxyStatement.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:80) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	... 127 common frames omitted

2026-01-27T13:38:35.251+05:30  WARN 32424 --- [parkease] [restartedMain] o.h.t.s.i.ExceptionHandlerLoggedImpl     : GenerationTarget encountered exception accepting command : Error executing DDL "
    create table roles (
        id integer generated by default as identity,
        name varchar(255) not null unique,
        primary key (id)
    )" via JDBC [ERROR: relation "roles" already exists]

org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "
    create table roles (
        id integer generated by default as identity,
        name varchar(255) not null unique,
        primary key (id)
    )" via JDBC [ERROR: relation "roles" already exists]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:94) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlString(Helper.java:233) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlStrings(Helper.java:217) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createTables(SchemaCreatorImpl.java:428) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createSequencesTablesConstraints(SchemaCreatorImpl.java:344) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createFromMetadata(SchemaCreatorImpl.java:239) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.performCreation(SchemaCreatorImpl.java:172) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:118) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:250) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:144) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at java.base/java.util.HashMap.forEach(HashMap.java:1430) ~[na:na]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:141) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:37) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:35) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:324) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:463) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1506) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:390) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:419) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:400) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:366) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1855) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1707) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1456) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:211) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:174) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:169) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:154) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:87) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getServletContextInitializerBeans(ServletWebServerApplicationContext.java:266) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.selfInitialize(ServletWebServerApplicationContext.java:240) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatStarter.onStartup(TomcatStarter.java:52) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4426) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:772) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:415) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:870) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:437) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:128) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:107) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:516) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:222) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:188) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:752) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:439) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:318) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: ERROR: relation "roles" already exists
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2733) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2420) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:372) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:517) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:434) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:356) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:341) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:317) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:312) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyStatement.execute(ProxyStatement.java:94) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyStatement.execute(HikariProxyStatement.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:80) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	... 127 common frames omitted

2026-01-27T13:38:35.258+05:30  WARN 32424 --- [parkease] [restartedMain] o.h.t.s.i.ExceptionHandlerLoggedImpl     : GenerationTarget encountered exception accepting command : Error executing DDL "
    create table user_roles (
        role_id integer not null,
        user_id integer not null
    )" via JDBC [ERROR: relation "user_roles" already exists]

org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "
    create table user_roles (
        role_id integer not null,
        user_id integer not null
    )" via JDBC [ERROR: relation "user_roles" already exists]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:94) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlString(Helper.java:233) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlStrings(Helper.java:217) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createTables(SchemaCreatorImpl.java:428) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createSequencesTablesConstraints(SchemaCreatorImpl.java:344) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createFromMetadata(SchemaCreatorImpl.java:239) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.performCreation(SchemaCreatorImpl.java:172) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:118) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:250) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:144) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at java.base/java.util.HashMap.forEach(HashMap.java:1430) ~[na:na]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:141) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:37) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:35) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:324) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:463) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1506) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:390) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:419) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:400) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:366) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1855) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1707) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1456) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:211) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:174) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:169) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:154) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:87) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getServletContextInitializerBeans(ServletWebServerApplicationContext.java:266) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.selfInitialize(ServletWebServerApplicationContext.java:240) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatStarter.onStartup(TomcatStarter.java:52) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4426) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:772) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:415) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:870) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:437) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:128) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:107) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:516) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:222) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:188) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:752) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:439) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:318) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: ERROR: relation "user_roles" already exists
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2733) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2420) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:372) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:517) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:434) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:356) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:341) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:317) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:312) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyStatement.execute(ProxyStatement.java:94) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyStatement.execute(HikariProxyStatement.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:80) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	... 127 common frames omitted

2026-01-27T13:38:35.263+05:30  WARN 32424 --- [parkease] [restartedMain] o.h.t.s.i.ExceptionHandlerLoggedImpl     : GenerationTarget encountered exception accepting command : Error executing DDL "
    create table users (
        created_at date not null,
        id integer not null,
        is_verified boolean default false,
        email varchar(255) not null unique,
        name varchar(255) not null,
        password varchar(255) not null,
        phone varchar(255) not null unique,
        primary key (id)
    )" via JDBC [ERROR: relation "users" already exists]

org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "
    create table users (
        created_at date not null,
        id integer not null,
        is_verified boolean default false,
        email varchar(255) not null unique,
        name varchar(255) not null,
        password varchar(255) not null,
        phone varchar(255) not null unique,
        primary key (id)
    )" via JDBC [ERROR: relation "users" already exists]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:94) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlString(Helper.java:233) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlStrings(Helper.java:217) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createTables(SchemaCreatorImpl.java:428) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createSequencesTablesConstraints(SchemaCreatorImpl.java:344) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createFromMetadata(SchemaCreatorImpl.java:239) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.performCreation(SchemaCreatorImpl.java:172) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:118) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:250) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:144) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at java.base/java.util.HashMap.forEach(HashMap.java:1430) ~[na:na]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:141) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:37) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:35) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:324) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:463) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1506) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:390) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:419) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:400) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:366) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1855) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1707) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1456) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:211) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:174) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:169) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:154) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:87) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getServletContextInitializerBeans(ServletWebServerApplicationContext.java:266) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.selfInitialize(ServletWebServerApplicationContext.java:240) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatStarter.onStartup(TomcatStarter.java:52) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4426) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:772) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:415) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:870) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:437) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:128) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:107) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:516) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:222) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:188) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:752) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:439) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:318) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: ERROR: relation "users" already exists
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2733) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2420) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:372) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:517) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:434) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:356) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:341) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:317) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:312) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyStatement.execute(ProxyStatement.java:94) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyStatement.execute(HikariProxyStatement.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:80) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	... 127 common frames omitted

2026-01-27T13:38:35.271+05:30  WARN 32424 --- [parkease] [restartedMain] o.h.t.s.i.ExceptionHandlerLoggedImpl     : GenerationTarget encountered exception accepting command : Error executing DDL "
    create table vehicles (
        id integer generated by default as identity,
        reservation_id integer not null unique,
        plate_number varchar(255) not null,
        vehicle_type varchar(255) not null check (vehicle_type in ('TWO_WHEELER','SUV','HATCHBACK','MINI_BUS')),
        primary key (id)
    )" via JDBC [ERROR: relation "vehicles" already exists]

org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "
    create table vehicles (
        id integer generated by default as identity,
        reservation_id integer not null unique,
        plate_number varchar(255) not null,
        vehicle_type varchar(255) not null check (vehicle_type in ('TWO_WHEELER','SUV','HATCHBACK','MINI_BUS')),
        primary key (id)
    )" via JDBC [ERROR: relation "vehicles" already exists]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:94) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlString(Helper.java:233) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlStrings(Helper.java:217) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createTables(SchemaCreatorImpl.java:428) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createSequencesTablesConstraints(SchemaCreatorImpl.java:344) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createFromMetadata(SchemaCreatorImpl.java:239) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.performCreation(SchemaCreatorImpl.java:172) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:118) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:250) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:144) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at java.base/java.util.HashMap.forEach(HashMap.java:1430) ~[na:na]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:141) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:37) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:35) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:324) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:463) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1506) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:390) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:419) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:400) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:366) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1855) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1707) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1456) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:211) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:174) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:169) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:154) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:87) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getServletContextInitializerBeans(ServletWebServerApplicationContext.java:266) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.selfInitialize(ServletWebServerApplicationContext.java:240) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatStarter.onStartup(TomcatStarter.java:52) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4426) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:772) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:415) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:870) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:437) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:128) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:107) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:516) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:222) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:188) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:752) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:439) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:318) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: ERROR: relation "vehicles" already exists
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2733) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2420) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:372) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:517) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:434) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:356) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:341) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:317) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:312) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyStatement.execute(ProxyStatement.java:94) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyStatement.execute(HikariProxyStatement.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:80) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	... 127 common frames omitted

2026-01-27T13:38:35.279+05:30  WARN 32424 --- [parkease] [restartedMain] o.h.t.s.i.ExceptionHandlerLoggedImpl     : GenerationTarget encountered exception accepting command : Error executing DDL "
    create index idx_res_status 
       on reservations (status)" via JDBC [ERROR: relation "idx_res_status" already exists]

org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "
    create index idx_res_status 
       on reservations (status)" via JDBC [ERROR: relation "idx_res_status" already exists]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:94) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlString(Helper.java:233) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlStrings(Helper.java:217) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createTableConstraints(SchemaCreatorImpl.java:390) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createSequencesTablesConstraints(SchemaCreatorImpl.java:356) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createFromMetadata(SchemaCreatorImpl.java:239) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.performCreation(SchemaCreatorImpl.java:172) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:118) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:250) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:144) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at java.base/java.util.HashMap.forEach(HashMap.java:1430) ~[na:na]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:141) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:37) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:35) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:324) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:463) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1506) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:390) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:419) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:400) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:366) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1855) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1707) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1456) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:211) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:174) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:169) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:154) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:87) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getServletContextInitializerBeans(ServletWebServerApplicationContext.java:266) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.selfInitialize(ServletWebServerApplicationContext.java:240) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatStarter.onStartup(TomcatStarter.java:52) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4426) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:772) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:415) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:870) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:437) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:128) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:107) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:516) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:222) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:188) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:752) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:439) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:318) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: ERROR: relation "idx_res_status" already exists
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2733) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2420) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:372) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:517) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:434) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:356) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:341) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:317) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:312) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyStatement.execute(ProxyStatement.java:94) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyStatement.execute(HikariProxyStatement.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:80) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	... 127 common frames omitted

2026-01-27T13:38:35.283+05:30  WARN 32424 --- [parkease] [restartedMain] o.h.t.s.i.ExceptionHandlerLoggedImpl     : GenerationTarget encountered exception accepting command : Error executing DDL "
    create index idx_res_start 
       on reservations (start_time)" via JDBC [ERROR: relation "idx_res_start" already exists]

org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "
    create index idx_res_start 
       on reservations (start_time)" via JDBC [ERROR: relation "idx_res_start" already exists]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:94) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlString(Helper.java:233) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlStrings(Helper.java:217) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createTableConstraints(SchemaCreatorImpl.java:390) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createSequencesTablesConstraints(SchemaCreatorImpl.java:356) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createFromMetadata(SchemaCreatorImpl.java:239) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.performCreation(SchemaCreatorImpl.java:172) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:118) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:250) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:144) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at java.base/java.util.HashMap.forEach(HashMap.java:1430) ~[na:na]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:141) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:37) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:35) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:324) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:463) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1506) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:390) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:419) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:400) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:366) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1855) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1707) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1456) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:211) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:174) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:169) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:154) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:87) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getServletContextInitializerBeans(ServletWebServerApplicationContext.java:266) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.selfInitialize(ServletWebServerApplicationContext.java:240) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatStarter.onStartup(TomcatStarter.java:52) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4426) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:772) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:415) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:870) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:437) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:128) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:107) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:516) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:222) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:188) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:752) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:439) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:318) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: ERROR: relation "idx_res_start" already exists
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2733) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2420) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:372) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:517) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:434) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:356) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:341) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:317) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:312) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyStatement.execute(ProxyStatement.java:94) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyStatement.execute(HikariProxyStatement.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:80) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	... 127 common frames omitted

2026-01-27T13:38:35.287+05:30  WARN 32424 --- [parkease] [restartedMain] o.h.t.s.i.ExceptionHandlerLoggedImpl     : GenerationTarget encountered exception accepting command : Error executing DDL "
    create index idx_res_user 
       on reservations (user_id)" via JDBC [ERROR: relation "idx_res_user" already exists]

org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "
    create index idx_res_user 
       on reservations (user_id)" via JDBC [ERROR: relation "idx_res_user" already exists]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:94) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlString(Helper.java:233) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlStrings(Helper.java:217) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createTableConstraints(SchemaCreatorImpl.java:390) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createSequencesTablesConstraints(SchemaCreatorImpl.java:356) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createFromMetadata(SchemaCreatorImpl.java:239) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.performCreation(SchemaCreatorImpl.java:172) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:118) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:250) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:144) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at java.base/java.util.HashMap.forEach(HashMap.java:1430) ~[na:na]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:141) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:37) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:35) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:324) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:463) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1506) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:390) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:419) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:400) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:366) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1855) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1707) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1456) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:211) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:174) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:169) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:154) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:87) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getServletContextInitializerBeans(ServletWebServerApplicationContext.java:266) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.selfInitialize(ServletWebServerApplicationContext.java:240) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatStarter.onStartup(TomcatStarter.java:52) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4426) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:772) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:415) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:870) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:437) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:128) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:107) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:516) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:222) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:188) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:752) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:439) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:318) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: ERROR: relation "idx_res_user" already exists
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2733) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2420) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:372) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:517) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:434) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:356) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:341) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:317) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:312) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyStatement.execute(ProxyStatement.java:94) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyStatement.execute(HikariProxyStatement.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:80) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	... 127 common frames omitted

2026-01-27T13:38:35.305+05:30  WARN 32424 --- [parkease] [restartedMain] o.h.t.s.i.ExceptionHandlerLoggedImpl     : GenerationTarget encountered exception accepting command : Error executing DDL "
    alter table if exists parking_slots 
       add constraint FK30ex8cd5nr72fuieut9rfvqt4 
       foreign key (zone_id) 
       references parking_zones" via JDBC [ERROR: constraint "fk30ex8cd5nr72fuieut9rfvqt4" for relation "parking_slots" already exists]

org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "
    alter table if exists parking_slots 
       add constraint FK30ex8cd5nr72fuieut9rfvqt4 
       foreign key (zone_id) 
       references parking_zones" via JDBC [ERROR: constraint "fk30ex8cd5nr72fuieut9rfvqt4" for relation "parking_slots" already exists]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:94) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlString(Helper.java:233) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlStrings(Helper.java:217) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createForeignKeys(SchemaCreatorImpl.java:305) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createFromMetadata(SchemaCreatorImpl.java:251) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.performCreation(SchemaCreatorImpl.java:172) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:118) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:250) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:144) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at java.base/java.util.HashMap.forEach(HashMap.java:1430) ~[na:na]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:141) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:37) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:35) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:324) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:463) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1506) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:390) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:419) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:400) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:366) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1855) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1707) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1456) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:211) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:174) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:169) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:154) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:87) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getServletContextInitializerBeans(ServletWebServerApplicationContext.java:266) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.selfInitialize(ServletWebServerApplicationContext.java:240) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatStarter.onStartup(TomcatStarter.java:52) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4426) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:772) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:415) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:870) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:437) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:128) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:107) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:516) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:222) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:188) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:752) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:439) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:318) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: ERROR: constraint "fk30ex8cd5nr72fuieut9rfvqt4" for relation "parking_slots" already exists
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2733) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2420) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:372) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:517) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:434) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:356) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:341) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:317) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:312) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyStatement.execute(ProxyStatement.java:94) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyStatement.execute(HikariProxyStatement.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:80) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	... 126 common frames omitted

2026-01-27T13:38:35.311+05:30  WARN 32424 --- [parkease] [restartedMain] o.h.t.s.i.ExceptionHandlerLoggedImpl     : GenerationTarget encountered exception accepting command : Error executing DDL "
    alter table if exists payment_transactions 
       add constraint FK6lysm563jhpge8piv14tglqqx 
       foreign key (reservation_id) 
       references reservations" via JDBC [ERROR: constraint "fk6lysm563jhpge8piv14tglqqx" for relation "payment_transactions" already exists]

org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "
    alter table if exists payment_transactions 
       add constraint FK6lysm563jhpge8piv14tglqqx 
       foreign key (reservation_id) 
       references reservations" via JDBC [ERROR: constraint "fk6lysm563jhpge8piv14tglqqx" for relation "payment_transactions" already exists]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:94) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlString(Helper.java:233) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlStrings(Helper.java:217) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createForeignKeys(SchemaCreatorImpl.java:305) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createFromMetadata(SchemaCreatorImpl.java:251) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.performCreation(SchemaCreatorImpl.java:172) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:118) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:250) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:144) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at java.base/java.util.HashMap.forEach(HashMap.java:1430) ~[na:na]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:141) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:37) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:35) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:324) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:463) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1506) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:390) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:419) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:400) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:366) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1855) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1707) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1456) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:211) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:174) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:169) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:154) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:87) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getServletContextInitializerBeans(ServletWebServerApplicationContext.java:266) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.selfInitialize(ServletWebServerApplicationContext.java:240) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatStarter.onStartup(TomcatStarter.java:52) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4426) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:772) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:415) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:870) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:437) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:128) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:107) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:516) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:222) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:188) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:752) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:439) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:318) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: ERROR: constraint "fk6lysm563jhpge8piv14tglqqx" for relation "payment_transactions" already exists
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2733) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2420) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:372) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:517) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:434) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:356) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:341) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:317) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:312) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyStatement.execute(ProxyStatement.java:94) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyStatement.execute(HikariProxyStatement.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:80) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	... 126 common frames omitted

2026-01-27T13:38:35.315+05:30  WARN 32424 --- [parkease] [restartedMain] o.h.t.s.i.ExceptionHandlerLoggedImpl     : GenerationTarget encountered exception accepting command : Error executing DDL "
    alter table if exists reservations 
       add constraint FKftjuy8xo2iqrckd0obif2ltxh 
       foreign key (payment_tx_id) 
       references payment_transactions" via JDBC [ERROR: constraint "fkftjuy8xo2iqrckd0obif2ltxh" for relation "reservations" already exists]

org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "
    alter table if exists reservations 
       add constraint FKftjuy8xo2iqrckd0obif2ltxh 
       foreign key (payment_tx_id) 
       references payment_transactions" via JDBC [ERROR: constraint "fkftjuy8xo2iqrckd0obif2ltxh" for relation "reservations" already exists]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:94) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlString(Helper.java:233) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlStrings(Helper.java:217) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createForeignKeys(SchemaCreatorImpl.java:305) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createFromMetadata(SchemaCreatorImpl.java:251) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.performCreation(SchemaCreatorImpl.java:172) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:118) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:250) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:144) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at java.base/java.util.HashMap.forEach(HashMap.java:1430) ~[na:na]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:141) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:37) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:35) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:324) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:463) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1506) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:390) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:419) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:400) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:366) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1855) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1707) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1456) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:211) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:174) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:169) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:154) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:87) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getServletContextInitializerBeans(ServletWebServerApplicationContext.java:266) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.selfInitialize(ServletWebServerApplicationContext.java:240) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatStarter.onStartup(TomcatStarter.java:52) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4426) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:772) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:415) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:870) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:437) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:128) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:107) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:516) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:222) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:188) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:752) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:439) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:318) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: ERROR: constraint "fkftjuy8xo2iqrckd0obif2ltxh" for relation "reservations" already exists
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2733) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2420) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:372) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:517) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:434) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:356) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:341) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:317) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:312) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyStatement.execute(ProxyStatement.java:94) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyStatement.execute(HikariProxyStatement.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:80) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	... 126 common frames omitted

2026-01-27T13:38:35.320+05:30  WARN 32424 --- [parkease] [restartedMain] o.h.t.s.i.ExceptionHandlerLoggedImpl     : GenerationTarget encountered exception accepting command : Error executing DDL "
    alter table if exists reservations 
       add constraint FKa0t6epq80cb9fwefvastfqsg7 
       foreign key (slot_id) 
       references parking_slots" via JDBC [ERROR: constraint "fka0t6epq80cb9fwefvastfqsg7" for relation "reservations" already exists]

org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "
    alter table if exists reservations 
       add constraint FKa0t6epq80cb9fwefvastfqsg7 
       foreign key (slot_id) 
       references parking_slots" via JDBC [ERROR: constraint "fka0t6epq80cb9fwefvastfqsg7" for relation "reservations" already exists]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:94) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlString(Helper.java:233) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlStrings(Helper.java:217) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createForeignKeys(SchemaCreatorImpl.java:305) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createFromMetadata(SchemaCreatorImpl.java:251) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.performCreation(SchemaCreatorImpl.java:172) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:118) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:250) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:144) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at java.base/java.util.HashMap.forEach(HashMap.java:1430) ~[na:na]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:141) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:37) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:35) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:324) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:463) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1506) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:390) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:419) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:400) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:366) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1855) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1707) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1456) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:211) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:174) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:169) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:154) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:87) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getServletContextInitializerBeans(ServletWebServerApplicationContext.java:266) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.selfInitialize(ServletWebServerApplicationContext.java:240) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatStarter.onStartup(TomcatStarter.java:52) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4426) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:772) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:415) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:870) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:437) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:128) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:107) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:516) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:222) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:188) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:752) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:439) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:318) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: ERROR: constraint "fka0t6epq80cb9fwefvastfqsg7" for relation "reservations" already exists
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2733) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2420) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:372) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:517) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:434) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:356) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:341) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:317) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:312) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyStatement.execute(ProxyStatement.java:94) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyStatement.execute(HikariProxyStatement.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:80) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	... 126 common frames omitted

2026-01-27T13:38:35.371+05:30  WARN 32424 --- [parkease] [restartedMain] o.h.t.s.i.ExceptionHandlerLoggedImpl     : GenerationTarget encountered exception accepting command : Error executing DDL "
    alter table if exists reservations 
       add constraint FKb5g9io5h54iwl2inkno50ppln 
       foreign key (user_id) 
       references users" via JDBC [ERROR: constraint "fkb5g9io5h54iwl2inkno50ppln" for relation "reservations" already exists]

org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "
    alter table if exists reservations 
       add constraint FKb5g9io5h54iwl2inkno50ppln 
       foreign key (user_id) 
       references users" via JDBC [ERROR: constraint "fkb5g9io5h54iwl2inkno50ppln" for relation "reservations" already exists]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:94) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlString(Helper.java:233) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlStrings(Helper.java:217) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createForeignKeys(SchemaCreatorImpl.java:305) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createFromMetadata(SchemaCreatorImpl.java:251) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.performCreation(SchemaCreatorImpl.java:172) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:118) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:250) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:144) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at java.base/java.util.HashMap.forEach(HashMap.java:1430) ~[na:na]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:141) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:37) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:35) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:324) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:463) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1506) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:390) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:419) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:400) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:366) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1855) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1707) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1456) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:211) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:174) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:169) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:154) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:87) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getServletContextInitializerBeans(ServletWebServerApplicationContext.java:266) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.selfInitialize(ServletWebServerApplicationContext.java:240) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatStarter.onStartup(TomcatStarter.java:52) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4426) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:772) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:415) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:870) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:437) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:128) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:107) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:516) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:222) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:188) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:752) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:439) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:318) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: ERROR: constraint "fkb5g9io5h54iwl2inkno50ppln" for relation "reservations" already exists
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2733) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2420) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:372) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:517) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:434) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:356) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:341) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:317) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:312) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyStatement.execute(ProxyStatement.java:94) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyStatement.execute(HikariProxyStatement.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:80) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	... 126 common frames omitted

2026-01-27T13:38:35.375+05:30  INFO 32424 --- [parkease] [restartedMain] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T13:38:35.376+05:30  WARN 32424 --- [parkease] [restartedMain] o.h.t.s.i.ExceptionHandlerLoggedImpl     : GenerationTarget encountered exception accepting command : Error executing DDL "
    alter table if exists user_roles 
       add constraint FKh8ciramu9cc9q3qcqiv4ue8a6 
       foreign key (role_id) 
       references roles" via JDBC [ERROR: constraint "fkh8ciramu9cc9q3qcqiv4ue8a6" for relation "user_roles" already exists]

org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "
    alter table if exists user_roles 
       add constraint FKh8ciramu9cc9q3qcqiv4ue8a6 
       foreign key (role_id) 
       references roles" via JDBC [ERROR: constraint "fkh8ciramu9cc9q3qcqiv4ue8a6" for relation "user_roles" already exists]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:94) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlString(Helper.java:233) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlStrings(Helper.java:217) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createForeignKeys(SchemaCreatorImpl.java:305) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createFromMetadata(SchemaCreatorImpl.java:251) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.performCreation(SchemaCreatorImpl.java:172) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:118) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:250) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:144) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at java.base/java.util.HashMap.forEach(HashMap.java:1430) ~[na:na]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:141) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:37) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:35) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:324) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:463) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1506) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:390) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:419) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:400) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:366) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1855) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1707) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1456) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:211) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:174) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:169) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:154) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:87) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getServletContextInitializerBeans(ServletWebServerApplicationContext.java:266) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.selfInitialize(ServletWebServerApplicationContext.java:240) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatStarter.onStartup(TomcatStarter.java:52) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4426) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:772) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:415) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:870) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:437) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:128) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:107) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:516) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:222) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:188) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:752) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:439) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:318) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: ERROR: constraint "fkh8ciramu9cc9q3qcqiv4ue8a6" for relation "user_roles" already exists
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2733) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2420) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:372) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:517) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:434) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:356) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:341) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:317) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:312) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyStatement.execute(ProxyStatement.java:94) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyStatement.execute(HikariProxyStatement.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:80) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	... 126 common frames omitted

2026-01-27T13:38:35.381+05:30  WARN 32424 --- [parkease] [restartedMain] o.h.t.s.i.ExceptionHandlerLoggedImpl     : GenerationTarget encountered exception accepting command : Error executing DDL "
    alter table if exists user_roles 
       add constraint FKhfh9dx7w3ubf1co1vdev94g3f 
       foreign key (user_id) 
       references users" via JDBC [ERROR: constraint "fkhfh9dx7w3ubf1co1vdev94g3f" for relation "user_roles" already exists]

org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "
    alter table if exists user_roles 
       add constraint FKhfh9dx7w3ubf1co1vdev94g3f 
       foreign key (user_id) 
       references users" via JDBC [ERROR: constraint "fkhfh9dx7w3ubf1co1vdev94g3f" for relation "user_roles" already exists]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:94) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlString(Helper.java:233) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlStrings(Helper.java:217) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createForeignKeys(SchemaCreatorImpl.java:305) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createFromMetadata(SchemaCreatorImpl.java:251) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.performCreation(SchemaCreatorImpl.java:172) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:118) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:250) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:144) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at java.base/java.util.HashMap.forEach(HashMap.java:1430) ~[na:na]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:141) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:37) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:35) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:324) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:463) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1506) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:390) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:419) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:400) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:366) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1855) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1707) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1456) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:211) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:174) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:169) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:154) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:87) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getServletContextInitializerBeans(ServletWebServerApplicationContext.java:266) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.selfInitialize(ServletWebServerApplicationContext.java:240) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatStarter.onStartup(TomcatStarter.java:52) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4426) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:772) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:415) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:870) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:437) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:128) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:107) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:516) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:222) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:188) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:752) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:439) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:318) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: ERROR: constraint "fkhfh9dx7w3ubf1co1vdev94g3f" for relation "user_roles" already exists
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2733) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2420) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:372) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:517) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:434) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:356) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:341) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:317) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:312) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyStatement.execute(ProxyStatement.java:94) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyStatement.execute(HikariProxyStatement.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:80) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	... 126 common frames omitted

2026-01-27T13:38:35.384+05:30  WARN 32424 --- [parkease] [restartedMain] o.h.t.s.i.ExceptionHandlerLoggedImpl     : GenerationTarget encountered exception accepting command : Error executing DDL "
    alter table if exists vehicles 
       add constraint FKl89uam7iqswju6rvvkkqa3y1o 
       foreign key (reservation_id) 
       references reservations" via JDBC [ERROR: constraint "fkl89uam7iqswju6rvvkkqa3y1o" for relation "vehicles" already exists]

org.hibernate.tool.schema.spi.CommandAcceptanceException: Error executing DDL "
    alter table if exists vehicles 
       add constraint FKl89uam7iqswju6rvvkkqa3y1o 
       foreign key (reservation_id) 
       references reservations" via JDBC [ERROR: constraint "fkl89uam7iqswju6rvvkkqa3y1o" for relation "vehicles" already exists]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:94) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlString(Helper.java:233) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.Helper.applySqlStrings(Helper.java:217) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createForeignKeys(SchemaCreatorImpl.java:305) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.createFromMetadata(SchemaCreatorImpl.java:251) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.performCreation(SchemaCreatorImpl.java:172) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:142) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.internal.SchemaCreatorImpl.doCreation(SchemaCreatorImpl.java:118) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:250) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:144) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at java.base/java.util.HashMap.forEach(HashMap.java:1430) ~[na:na]
	at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:141) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:37) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:35) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:324) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:463) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1506) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:390) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:419) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:400) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:366) ~[spring-orm-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1855) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:601) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.resolveConstructorArguments(ConstructorResolver.java:691) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:513) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1357) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:563) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:365) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:135) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1707) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1456) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1573) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1631) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1519) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.resolveFieldValue(AutowiredAnnotationBeanPostProcessor.java:785) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:768) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:146) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:509) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1441) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:600) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:336) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:289) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:334) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.getOrderedBeansOfType(ServletContextInitializerBeans.java:211) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:174) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAsRegistrationBean(ServletContextInitializerBeans.java:169) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.addAdaptableBeans(ServletContextInitializerBeans.java:154) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.ServletContextInitializerBeans.<init>(ServletContextInitializerBeans.java:87) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getServletContextInitializerBeans(ServletWebServerApplicationContext.java:266) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.selfInitialize(ServletWebServerApplicationContext.java:240) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatStarter.onStartup(TomcatStarter.java:52) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4426) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:772) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1193) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317) ~[na:na]
	at org.apache.tomcat.util.threads.InlineExecutorService.execute(InlineExecutorService.java:75) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at java.base/java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:148) ~[na:na]
	at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:749) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardEngine.startInternal(StandardEngine.java:203) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardService.startInternal(StandardService.java:415) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.core.StandardServer.startInternal(StandardServer.java:870) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:164) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.apache.catalina.startup.Tomcat.start(Tomcat.java:437) ~[tomcat-embed-core-10.1.34.jar:10.1.34]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.initialize(TomcatWebServer.java:128) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.<init>(TomcatWebServer.java:107) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getTomcatWebServer(TomcatServletWebServerFactory.java:516) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:222) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:188) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-6.2.1.jar:6.2.1]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:752) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:439) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:318) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]
Caused by: org.postgresql.util.PSQLException: ERROR: constraint "fkl89uam7iqswju6rvvkkqa3y1o" for relation "vehicles" already exists
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2733) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2420) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:372) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:517) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:434) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:356) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:341) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:317) ~[postgresql-42.7.4.jar:42.7.4]
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:312) ~[postgresql-42.7.4.jar:42.7.4]
	at com.zaxxer.hikari.pool.ProxyStatement.execute(ProxyStatement.java:94) ~[HikariCP-5.1.0.jar:na]
	at com.zaxxer.hikari.pool.HikariProxyStatement.execute(HikariProxyStatement.java) ~[HikariCP-5.1.0.jar:na]
	at org.hibernate.tool.schema.internal.exec.GenerationTargetToDatabase.accept(GenerationTargetToDatabase.java:80) ~[hibernate-core-6.6.4.Final.jar:6.6.4.Final]
	... 126 common frames omitted

2026-01-27T13:38:35.387+05:30  INFO 32424 --- [parkease] [restartedMain] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T13:38:35.513+05:30 DEBUG 32424 --- [parkease] [restartedMain] c.p.security.JwtAuthenticationFilter     : Filter 'jwtAuthenticationFilter' configured for use
2026-01-27T13:38:35.513+05:30 DEBUG 32424 --- [parkease] [restartedMain] c.p.security.JwtAuthenticationFilter     : Filter 'jwtAuthenticationFilter' configured for use
2026-01-27T13:38:35.698+05:30  INFO 32424 --- [parkease] [restartedMain] eAuthenticationProviderManagerConfigurer : Global AuthenticationManager configured with AuthenticationProvider bean with name authenticationProvider
2026-01-27T13:38:35.698+05:30  INFO 32424 --- [parkease] [restartedMain] eAuthenticationProviderManagerConfigurer : Global AuthenticationManager configured with AuthenticationProvider bean with name authenticationProvider
2026-01-27T13:38:35.698+05:30  WARN 32424 --- [parkease] [restartedMain] r$InitializeUserDetailsManagerConfigurer : Global AuthenticationManager configured with an AuthenticationProvider bean. UserDetailsService beans will not be used by Spring Security for automatically configuring username/password login. Consider removing the AuthenticationProvider bean. Alternatively, consider using the UserDetailsService in a manually instantiated DaoAuthenticationProvider. If the current configuration is intentional, to turn off this warning, increase the logging level of 'org.springframework.security.config.annotation.authentication.configuration.InitializeUserDetailsBeanManagerConfigurer' to ERROR
2026-01-27T13:38:35.698+05:30  WARN 32424 --- [parkease] [restartedMain] r$InitializeUserDetailsManagerConfigurer : Global AuthenticationManager configured with an AuthenticationProvider bean. UserDetailsService beans will not be used by Spring Security for automatically configuring username/password login. Consider removing the AuthenticationProvider bean. Alternatively, consider using the UserDetailsService in a manually instantiated DaoAuthenticationProvider. If the current configuration is intentional, to turn off this warning, increase the logging level of 'org.springframework.security.config.annotation.authentication.configuration.InitializeUserDetailsBeanManagerConfigurer' to ERROR
2026-01-27T13:38:36.257+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.b.a.e.web.EndpointLinksResolver      : Exposing 1 endpoint beneath base path '/actuator'
2026-01-27T13:38:36.257+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.b.a.e.web.EndpointLinksResolver      : Exposing 1 endpoint beneath base path '/actuator'
2026-01-27T13:38:36.432+05:30  WARN 32424 --- [parkease] [restartedMain] ion$DefaultTemplateResolverConfiguration : Cannot find template location: classpath:/templates/ (please add some templates, check your Thymeleaf configuration, or set spring.thymeleaf.check-template-location=false)
2026-01-27T13:38:36.432+05:30  WARN 32424 --- [parkease] [restartedMain] ion$DefaultTemplateResolverConfiguration : Cannot find template location: classpath:/templates/ (please add some templates, check your Thymeleaf configuration, or set spring.thymeleaf.check-template-location=false)
2026-01-27T13:38:36.690+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729
2026-01-27T13:38:36.690+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729
2026-01-27T13:38:36.713+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Starting...
2026-01-27T13:38:36.713+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=true, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@5c6b9861]]
2026-01-27T13:38:36.714+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Started.
2026-01-27T13:38:36.716+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Starting...
2026-01-27T13:38:36.716+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=true, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@4b669f23]]
2026-01-27T13:38:36.716+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Started.
2026-01-27T13:38:36.722+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8080 (http) with context path '/api'
2026-01-27T13:38:36.725+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopping...
2026-01-27T13:38:36.725+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=false, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@4b669f23]]
2026-01-27T13:38:36.725+05:30  INFO 32424 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopped.
2026-01-27T13:38:36.726+05:30  WARN 32424 --- [parkease] [restartedMain] ConfigServletWebServerApplicationContext : Exception encountered during context initialization - cancelling refresh attempt: org.springframework.context.ApplicationContextException: Failed to start bean 'webServerStartStop'
2026-01-27T13:38:36.729+05:30  INFO 32424 --- [parkease] [restartedMain] j.LocalContainerEntityManagerFactoryBean : Closing JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T13:38:36.731+05:30  INFO 32424 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-5 - Shutdown initiated...
2026-01-27T13:38:36.744+05:30  INFO 32424 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-5 - Shutdown completed.
2026-01-27T13:38:36.782+05:30  INFO 32424 --- [parkease] [restartedMain] .s.b.a.l.ConditionEvaluationReportLogger : 

Error starting ApplicationContext. To display the condition evaluation report re-run your application with 'debug' enabled.
2026-01-27T13:38:36.782+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Started ParkEaseApplication in 3.461 seconds (process running for 605.486)
2026-01-27T13:38:36.787+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : <<<< FORCE-RESEEDING DEMO DATA >>>>
2026-01-27T13:38:36.787+05:30 ERROR 32424 --- [parkease] [restartedMain] o.s.b.d.LoggingFailureAnalysisReporter   : 

***************************
APPLICATION FAILED TO START
***************************

Description:

Web server failed to start. Port 8080 was already in use.

Action:

Identify and stop the process that's listening on port 8080 or configure this application to listen on another port.

2026-01-27T13:38:36.800+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : ✅ Database cleaned
2026-01-27T13:38:36.813+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Roles seeded: USER, ADMIN
2026-01-27T13:38:36.827+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Base prices seeded for all vehicle types
2026-01-27T13:38:36.959+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Admin user seeded
2026-01-27T13:38:37.662+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 10 demo users
2026-01-27T13:38:37.688+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 4 parking zones
2026-01-27T13:38:37.707+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Downtown Parking
2026-01-27T13:38:37.717+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Mall Parking
2026-01-27T13:38:37.736+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Airport Parking
2026-01-27T13:38:37.739+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Hospital Parking
2026-01-27T13:38:37.807+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 80 new parking slots
2026-01-27T13:38:37.867+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 5: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:38:37.867+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 6: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:38:37.868+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 12: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:38:37.868+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 14: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:38:37.868+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 15: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:38:37.868+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 17: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:38:37.868+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 21: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:38:37.868+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 22: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:38:37.868+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 25: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:38:37.868+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 27: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:38:37.868+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 31: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:38:37.869+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 34: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:38:37.869+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 37: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:38:37.869+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 39: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:38:37.869+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 48: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:38:37.869+05:30  WARN 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 49: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:38:37.932+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 34 demo reservations
2026-01-27T13:38:37.933+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : ✅ Demo data seeding completed successfully
2026-01-27T13:38:37.941+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Zone Count: 4
2026-01-27T13:38:37.946+05:30  INFO 32424 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Slot Count: 80
2026-01-27T13:38:37.981+05:30  INFO 32424 --- [parkease] [restartedMain] .ConditionEvaluationDeltaLoggingListener : Condition evaluation unchanged
2026-01-27T13:39:36.749+05:30  INFO 32424 --- [parkease] [MessageBroker-2] o.s.w.s.c.WebSocketMessageBrokerStats    : WebSocketSession[0 current WS(0)-HttpStream(0)-HttpPoll(0), 0 total, 0 closed abnormally (0 connect failure, 0 send limit, 0 transport error)], stompSubProtocol[processed CONNECT(0)-CONNECTED(0)-DISCONNECT(0)], stompBrokerRelay[null], inboundChannel[pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0], outboundChannel[pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0], sockJsScheduler[pool size = 3, active threads = 1, queued tasks = 1, completed tasks = 1]
2026-01-27T13:42:39.417+05:30  INFO 32424 --- [parkease] [http-nio-8080-exec-2] o.s.web.servlet.DispatcherServlet        : Initializing Servlet 'dispatcherServlet'
2026-01-27T13:42:39.536+05:30  INFO 32424 --- [parkease] [http-nio-8080-exec-2] o.s.web.servlet.DispatcherServlet        : Completed initialization in 109 ms
2026-01-27T13:47:13.394+05:30  WARN 32424 --- [parkease] [http-nio-8080-exec-7] .m.m.a.ExceptionHandlerExceptionResolver : Resolved [org.springframework.security.authentication.BadCredentialsException: Bad credentials]
2026-01-27T13:47:22.946+05:30  INFO 32424 --- [parkease] [SpringApplicationShutdownHook] o.s.b.w.e.tomcat.GracefulShutdown        : Commencing graceful shutdown. Waiting for active requests to complete
2026-01-27T13:47:22.962+05:30  INFO 32424 --- [parkease] [tomcat-shutdown] o.s.b.w.e.tomcat.GracefulShutdown        : Graceful shutdown complete
2026-01-27T13:47:22.968+05:30  INFO 32424 --- [parkease] [SpringApplicationShutdownHook] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopping...
2026-01-27T13:47:22.968+05:30  INFO 32424 --- [parkease] [SpringApplicationShutdownHook] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=false, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@5c6b9861]]
2026-01-27T13:47:22.968+05:30  INFO 32424 --- [parkease] [SpringApplicationShutdownHook] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopped.
2026-01-27T13:47:22.981+05:30  INFO 32424 --- [parkease] [SpringApplicationShutdownHook] j.LocalContainerEntityManagerFactoryBean : Closing JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T13:47:22.997+05:30  INFO 32424 --- [parkease] [SpringApplicationShutdownHook] com.zaxxer.hikari.HikariDataSource       : HikariPool-4 - Shutdown initiated...
2026-01-27T13:47:23.008+05:30  INFO 32424 --- [parkease] [SpringApplicationShutdownHook] com.zaxxer.hikari.HikariDataSource       : HikariPool-4 - Shutdown completed.
2026-01-27T13:47:30.816+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Starting ParkEaseApplication using Java 23.0.1 with PID 24752 (A:\Project_F\backend\target\classes started by ashis in A:\Project_F\backend)
2026-01-27T13:47:30.817+05:30 DEBUG 24752 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Running with Spring Boot v3.4.1, Spring v6.2.1
2026-01-27T13:47:30.818+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : The following 1 profile is active: "dev"
2026-01-27T13:47:30.878+05:30  INFO 24752 --- [parkease] [restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : Devtools property defaults active! Set 'spring.devtools.add-properties' to 'false' to disable
2026-01-27T13:47:30.879+05:30  INFO 24752 --- [parkease] [restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : For additional web related logging consider setting the 'logging.level.web' property to 'DEBUG'
2026-01-27T13:47:32.288+05:30  INFO 24752 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2026-01-27T13:47:32.370+05:30  INFO 24752 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 71 ms. Found 7 JPA repository interfaces.
2026-01-27T13:47:33.486+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8080 (http)
2026-01-27T13:47:33.504+05:30  INFO 24752 --- [parkease] [restartedMain] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2026-01-27T13:47:33.504+05:30  INFO 24752 --- [parkease] [restartedMain] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.34]
2026-01-27T13:47:33.570+05:30  INFO 24752 --- [parkease] [restartedMain] o.a.c.c.C.[Tomcat].[localhost].[/api]    : Initializing Spring embedded WebApplicationContext
2026-01-27T13:47:33.570+05:30  INFO 24752 --- [parkease] [restartedMain] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 2691 ms
2026-01-27T13:47:34.455+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer
2026-01-27T13:47:34.496+05:30  INFO 24752 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
2026-01-27T13:47:34.784+05:30  INFO 24752 --- [parkease] [restartedMain] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection org.postgresql.jdbc.PgConnection@3ff0a398
2026-01-27T13:47:34.786+05:30  INFO 24752 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
2026-01-27T13:47:34.855+05:30  WARN 24752 --- [parkease] [restartedMain] org.hibernate.orm.deprecation            : HHH90000025: PostgreSQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
2026-01-27T13:47:36.320+05:30  INFO 24752 --- [parkease] [restartedMain] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T13:47:36.752+05:30 DEBUG 24752 --- [parkease] [restartedMain] c.p.security.JwtAuthenticationFilter     : Filter 'jwtAuthenticationFilter' configured for use
2026-01-27T13:47:36.853+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.d.j.r.query.QueryEnhancerFactory     : Hibernate is in classpath; If applicable, HQL parser will be used.
2026-01-27T13:47:38.518+05:30  INFO 24752 --- [parkease] [restartedMain] eAuthenticationProviderManagerConfigurer : Global AuthenticationManager configured with AuthenticationProvider bean with name authenticationProvider
2026-01-27T13:47:38.520+05:30  WARN 24752 --- [parkease] [restartedMain] r$InitializeUserDetailsManagerConfigurer : Global AuthenticationManager configured with an AuthenticationProvider bean. UserDetailsService beans will not be used by Spring Security for automatically configuring username/password login. Consider removing the AuthenticationProvider bean. Alternatively, consider using the UserDetailsService in a manually instantiated DaoAuthenticationProvider. If the current configuration is intentional, to turn off this warning, increase the logging level of 'org.springframework.security.config.annotation.authentication.configuration.InitializeUserDetailsBeanManagerConfigurer' to ERROR
2026-01-27T13:47:39.626+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.a.e.web.EndpointLinksResolver      : Exposing 1 endpoint beneath base path '/actuator'
2026-01-27T13:47:39.898+05:30  WARN 24752 --- [parkease] [restartedMain] ion$DefaultTemplateResolverConfiguration : Cannot find template location: classpath:/templates/ (please add some templates, check your Thymeleaf configuration, or set spring.thymeleaf.check-template-location=false)
2026-01-27T13:47:40.290+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729
2026-01-27T13:47:40.358+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Starting...
2026-01-27T13:47:40.359+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=true, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@78b88cfb]]
2026-01-27T13:47:40.360+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Started.
2026-01-27T13:47:40.385+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8080 (http) with context path '/api'
2026-01-27T13:47:40.407+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Started ParkEaseApplication in 10.117 seconds (process running for 10.775)
2026-01-27T13:47:40.663+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : <<<< FORCE-RESEEDING DEMO DATA >>>>
2026-01-27T13:47:40.797+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : ✅ Database cleaned
2026-01-27T13:47:41.015+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Roles seeded: USER, ADMIN
2026-01-27T13:47:41.038+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Base prices seeded for all vehicle types
2026-01-27T13:47:41.157+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Admin user seeded
2026-01-27T13:47:41.780+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 10 demo users
2026-01-27T13:47:41.796+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 4 parking zones
2026-01-27T13:47:41.807+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Downtown Parking
2026-01-27T13:47:41.811+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Mall Parking
2026-01-27T13:47:41.814+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Airport Parking
2026-01-27T13:47:41.817+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Hospital Parking
2026-01-27T13:47:41.865+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 80 new parking slots
2026-01-27T13:47:41.880+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 0: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.880+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 1: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.880+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 6: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.880+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 7: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.881+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 11: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.881+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 12: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.881+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 14: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.881+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 15: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.881+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 16: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.881+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 17: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.881+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 20: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.881+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 21: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.881+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 22: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.881+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 24: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.882+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 32: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.882+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 33: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.882+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 34: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.882+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 36: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.882+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 40: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.882+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 44: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.882+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 45: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.882+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 47: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.882+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 49: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T13:47:41.919+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 27 demo reservations
2026-01-27T13:47:41.919+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : ✅ Demo data seeding completed successfully
2026-01-27T13:47:41.923+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Zone Count: 4
2026-01-27T13:47:41.927+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Slot Count: 80
2026-01-27T13:48:08.453+05:30  INFO 24752 --- [parkease] [http-nio-8080-exec-3] o.a.c.c.C.[Tomcat].[localhost].[/api]    : Initializing Spring DispatcherServlet 'dispatcherServlet'
2026-01-27T13:48:08.453+05:30  INFO 24752 --- [parkease] [http-nio-8080-exec-3] o.s.web.servlet.DispatcherServlet        : Initializing Servlet 'dispatcherServlet'
2026-01-27T13:48:08.456+05:30  INFO 24752 --- [parkease] [http-nio-8080-exec-3] o.s.web.servlet.DispatcherServlet        : Completed initialization in 2 ms
2026-01-27T13:48:08.788+05:30  WARN 24752 --- [parkease] [http-nio-8080-exec-3] .m.m.a.ExceptionHandlerExceptionResolver : Resolved [org.springframework.security.authentication.BadCredentialsException: Bad credentials]
2026-01-27T13:48:29.926+05:30  WARN 24752 --- [parkease] [http-nio-8080-exec-6] .m.m.a.ExceptionHandlerExceptionResolver : Resolved [org.springframework.security.authentication.BadCredentialsException: Bad credentials]
2026-01-27T13:48:34.197+05:30  WARN 24752 --- [parkease] [http-nio-8080-exec-7] .m.m.a.ExceptionHandlerExceptionResolver : Resolved [org.springframework.security.authentication.BadCredentialsException: Bad credentials]
2026-01-27T13:48:40.322+05:30  INFO 24752 --- [parkease] [MessageBroker-2] o.s.w.s.c.WebSocketMessageBrokerStats    : WebSocketSession[0 current WS(0)-HttpStream(0)-HttpPoll(0), 0 total, 0 closed abnormally (0 connect failure, 0 send limit, 0 transport error)], stompSubProtocol[processed CONNECT(0)-CONNECTED(0)-DISCONNECT(0)], stompBrokerRelay[null], inboundChannel[pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0], outboundChannel[pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0], sockJsScheduler[pool size = 3, active threads = 1, queued tasks = 1, completed tasks = 1]
2026-01-27T13:51:25.444+05:30  WARN 24752 --- [parkease] [http-nio-8080-exec-5] .m.m.a.ExceptionHandlerExceptionResolver : Resolved [com.parkease.exception.ResourceNotFoundException: ParkingZone not found with name Central Parking]
2026-01-27T13:53:10.158+05:30  WARN 24752 --- [parkease] [http-nio-8080-exec-9] .m.m.a.ExceptionHandlerExceptionResolver : Resolved [com.parkease.exception.BadRequestException: You can cancel only your own reservation]
2026-01-27T13:54:25.815+05:30  WARN 24752 --- [parkease] [http-nio-8080-exec-2] .m.m.a.ExceptionHandlerExceptionResolver : Resolved [java.lang.NullPointerException: Cannot invoke "java.lang.Integer.intValue()" because the return value of "com.parkease.dto.request.ParkingZoneDto.capacity()" is null]
2026-01-27T13:59:59.283+05:30  WARN 24752 --- [parkease] [http-nio-8080-exec-6] .m.m.a.ExceptionHandlerExceptionResolver : Resolved [org.springframework.web.servlet.resource.NoResourceFoundException: No static resource admin/1.]
2026-01-27T14:00:51.795+05:30  WARN 24752 --- [parkease] [http-nio-8080-exec-7] .m.m.a.ExceptionHandlerExceptionResolver : Resolved [org.springframework.web.servlet.resource.NoResourceFoundException: No static resource admin/5.]
2026-01-27T14:05:06.312+05:30  WARN 24752 --- [parkease] [http-nio-8080-exec-2] .m.m.a.ExceptionHandlerExceptionResolver : Resolved [com.parkease.exception.ResourceNotFoundException: ParkingZone not found]
2026-01-27T14:08:29.270+05:30  WARN 24752 --- [parkease] [http-nio-8080-exec-4] .m.m.a.ExceptionHandlerExceptionResolver : Resolved [com.parkease.exception.ResourceNotFoundException: ParkingZone not found]
2026-01-27T14:09:54.052+05:30  WARN 24752 --- [parkease] [http-nio-8080-exec-10] .m.m.a.ExceptionHandlerExceptionResolver : Resolved [org.springframework.web.servlet.resource.NoResourceFoundException: No static resource admin/5.]
2026-01-27T14:12:58.580+05:30  INFO 24752 --- [parkease] [http-nio-8080-exec-7] c.parkease.controller.PaymentController  : DEMO MODE: Initiating demo payment for reservation: 1
2026-01-27T14:13:18.870+05:30  INFO 24752 --- [parkease] [http-nio-8080-exec-8] c.parkease.controller.PaymentController  : Processing demo payment for reservation: 1
2026-01-27T14:13:18.871+05:30  INFO 24752 --- [parkease] [http-nio-8080-exec-8] c.parkease.service.DemoPaymentService    : Creating demo payment order for amount: 100.0 INR
2026-01-27T14:13:20.880+05:30 DEBUG 24752 --- [parkease] [http-nio-8080-exec-8] c.parkease.service.DemoPaymentService    : Demo payment order created: demo_order_0888bc66
2026-01-27T14:13:20.882+05:30  INFO 24752 --- [parkease] [http-nio-8080-exec-8] c.parkease.service.DemoPaymentService    : Verifying demo payment - Order: demo_order_0888bc66, Payment: pay_demo_1769503400882
2026-01-27T14:13:22.893+05:30  INFO 24752 --- [parkease] [http-nio-8080-exec-8] c.parkease.service.DemoPaymentService    : Demo payment verified successfully for order: demo_order_0888bc66
2026-01-27T14:13:22.911+05:30  WARN 24752 --- [parkease] [http-nio-8080-exec-8] .m.m.a.ExceptionHandlerExceptionResolver : Resolved [com.parkease.exception.BadRequestException: Reservation already processed]
2026-01-27T14:15:21.997+05:30  INFO 24752 --- [parkease] [File Watcher] rtingClassPathChangeChangedEventListener : Restarting due to 1 class path change (0 additions, 0 deletions, 1 modification)
2026-01-27T14:15:22.185+05:30  INFO 24752 --- [parkease] [Thread-5] o.s.b.w.e.tomcat.GracefulShutdown        : Commencing graceful shutdown. Waiting for active requests to complete
2026-01-27T14:15:22.229+05:30  INFO 24752 --- [parkease] [tomcat-shutdown] o.s.b.w.e.tomcat.GracefulShutdown        : Graceful shutdown complete
2026-01-27T14:15:22.252+05:30  INFO 24752 --- [parkease] [Thread-5] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopping...
2026-01-27T14:15:22.255+05:30  INFO 24752 --- [parkease] [Thread-5] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=false, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@78b88cfb]]
2026-01-27T14:15:22.256+05:30  INFO 24752 --- [parkease] [Thread-5] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopped.
2026-01-27T14:15:22.362+05:30  INFO 24752 --- [parkease] [Thread-5] j.LocalContainerEntityManagerFactoryBean : Closing JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T14:15:22.503+05:30  INFO 24752 --- [parkease] [Thread-5] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown initiated...
2026-01-27T14:15:22.556+05:30  INFO 24752 --- [parkease] [Thread-5] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown completed.
2026-01-27T14:15:23.679+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Starting ParkEaseApplication using Java 23.0.1 with PID 24752 (A:\Project_F\backend\target\classes started by ashis in A:\Project_F\backend)
2026-01-27T14:15:23.680+05:30 DEBUG 24752 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Running with Spring Boot v3.4.1, Spring v6.2.1
2026-01-27T14:15:23.680+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : The following 1 profile is active: "dev"
2026-01-27T14:15:24.734+05:30  INFO 24752 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2026-01-27T14:15:24.786+05:30  INFO 24752 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 50 ms. Found 7 JPA repository interfaces.
2026-01-27T14:15:25.295+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8080 (http)
2026-01-27T14:15:25.297+05:30  INFO 24752 --- [parkease] [restartedMain] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2026-01-27T14:15:25.297+05:30  INFO 24752 --- [parkease] [restartedMain] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.34]
2026-01-27T14:15:25.353+05:30  INFO 24752 --- [parkease] [restartedMain] o.a.c.c.C.[Tomcat].[localhost].[/api]    : Initializing Spring embedded WebApplicationContext
2026-01-27T14:15:25.354+05:30  INFO 24752 --- [parkease] [restartedMain] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1665 ms
2026-01-27T14:15:25.602+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer
2026-01-27T14:15:25.605+05:30  INFO 24752 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-2 - Starting...
2026-01-27T14:15:25.694+05:30  INFO 24752 --- [parkease] [restartedMain] com.zaxxer.hikari.pool.HikariPool        : HikariPool-2 - Added connection org.postgresql.jdbc.PgConnection@19db2426
2026-01-27T14:15:25.696+05:30  INFO 24752 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-2 - Start completed.
2026-01-27T14:15:25.720+05:30  WARN 24752 --- [parkease] [restartedMain] org.hibernate.orm.deprecation            : HHH90000025: PostgreSQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
2026-01-27T14:15:26.132+05:30  INFO 24752 --- [parkease] [restartedMain] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T14:15:26.259+05:30 DEBUG 24752 --- [parkease] [restartedMain] c.p.security.JwtAuthenticationFilter     : Filter 'jwtAuthenticationFilter' configured for use
2026-01-27T14:15:26.409+05:30  INFO 24752 --- [parkease] [restartedMain] eAuthenticationProviderManagerConfigurer : Global AuthenticationManager configured with AuthenticationProvider bean with name authenticationProvider
2026-01-27T14:15:26.409+05:30  WARN 24752 --- [parkease] [restartedMain] r$InitializeUserDetailsManagerConfigurer : Global AuthenticationManager configured with an AuthenticationProvider bean. UserDetailsService beans will not be used by Spring Security for automatically configuring username/password login. Consider removing the AuthenticationProvider bean. Alternatively, consider using the UserDetailsService in a manually instantiated DaoAuthenticationProvider. If the current configuration is intentional, to turn off this warning, increase the logging level of 'org.springframework.security.config.annotation.authentication.configuration.InitializeUserDetailsBeanManagerConfigurer' to ERROR
2026-01-27T14:15:26.849+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.a.e.web.EndpointLinksResolver      : Exposing 1 endpoint beneath base path '/actuator'
2026-01-27T14:15:26.962+05:30  WARN 24752 --- [parkease] [restartedMain] ion$DefaultTemplateResolverConfiguration : Cannot find template location: classpath:/templates/ (please add some templates, check your Thymeleaf configuration, or set spring.thymeleaf.check-template-location=false)
2026-01-27T14:15:27.129+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729
2026-01-27T14:15:27.145+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Starting...
2026-01-27T14:15:27.145+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=true, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@3910da72]]
2026-01-27T14:15:27.145+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Started.
2026-01-27T14:15:27.150+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8080 (http) with context path '/api'
2026-01-27T14:15:27.159+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Started ParkEaseApplication in 3.6 seconds (process running for 1677.527)
2026-01-27T14:15:27.161+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : <<<< FORCE-RESEEDING DEMO DATA >>>>
2026-01-27T14:15:27.169+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : ✅ Database cleaned
2026-01-27T14:15:27.177+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Roles seeded: USER, ADMIN
2026-01-27T14:15:27.187+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Base prices seeded for all vehicle types
2026-01-27T14:15:27.262+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Admin user seeded
2026-01-27T14:15:27.901+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 10 demo users
2026-01-27T14:15:27.914+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 4 parking zones
2026-01-27T14:15:27.918+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Downtown Parking
2026-01-27T14:15:27.920+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Mall Parking
2026-01-27T14:15:27.923+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Airport Parking
2026-01-27T14:15:27.926+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Hospital Parking
2026-01-27T14:15:27.969+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 80 new parking slots
2026-01-27T14:15:27.979+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 1: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T14:15:27.979+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 5: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T14:15:27.979+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 9: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T14:15:27.979+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 11: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T14:15:27.979+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 13: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T14:15:27.979+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 16: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T14:15:27.979+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 17: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T14:15:27.979+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 19: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T14:15:27.979+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 20: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T14:15:27.979+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 22: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T14:15:27.981+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 24: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T14:15:27.981+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 27: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T14:15:27.981+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 30: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T14:15:27.981+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 31: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T14:15:27.981+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 36: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T14:15:27.981+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 37: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T14:15:27.981+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 40: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T14:15:27.981+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 43: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T14:15:27.981+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 48: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T14:15:27.981+05:30  WARN 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 49: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T14:15:28.015+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 30 demo reservations
2026-01-27T14:15:28.015+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : ✅ Demo data seeding completed successfully
2026-01-27T14:15:28.020+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Zone Count: 4
2026-01-27T14:15:28.025+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Slot Count: 80
2026-01-27T14:15:28.039+05:30  INFO 24752 --- [parkease] [restartedMain] .ConditionEvaluationDeltaLoggingListener : Condition evaluation unchanged
2026-01-27T14:16:11.526+05:30  INFO 24752 --- [parkease] [http-nio-8080-exec-2] o.a.c.c.C.[Tomcat].[localhost].[/api]    : Initializing Spring DispatcherServlet 'dispatcherServlet'
2026-01-27T14:16:11.526+05:30  INFO 24752 --- [parkease] [http-nio-8080-exec-2] o.s.web.servlet.DispatcherServlet        : Initializing Servlet 'dispatcherServlet'
2026-01-27T14:16:11.528+05:30  INFO 24752 --- [parkease] [http-nio-8080-exec-2] o.s.web.servlet.DispatcherServlet        : Completed initialization in 2 ms
2026-01-27T14:16:11.539+05:30  INFO 24752 --- [parkease] [http-nio-8080-exec-2] c.parkease.controller.PaymentController  : Payment simulation requested: {scenario=success, amount=100.0}
2026-01-27T14:16:27.143+05:30  INFO 24752 --- [parkease] [MessageBroker-2] o.s.w.s.c.WebSocketMessageBrokerStats    : WebSocketSession[0 current WS(0)-HttpStream(0)-HttpPoll(0), 0 total, 0 closed abnormally (0 connect failure, 0 send limit, 0 transport error)], stompSubProtocol[processed CONNECT(0)-CONNECTED(0)-DISCONNECT(0)], stompBrokerRelay[null], inboundChannel[pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0], outboundChannel[pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0], sockJsScheduler[pool size = 3, active threads = 1, queued tasks = 1, completed tasks = 1]
2026-01-27T14:16:50.883+05:30  INFO 24752 --- [parkease] [http-nio-8080-exec-3] c.parkease.service.DemoPaymentService    : Generating demo receipt for payment: pay_demo_12345
2026-01-27T14:16:52.890+05:30 DEBUG 24752 --- [parkease] [http-nio-8080-exec-3] c.parkease.service.DemoPaymentService    : Demo receipt generated: RCPT_1CC5322B
2026-01-27T14:17:29.417+05:30  INFO 24752 --- [parkease] [http-nio-8080-exec-4] c.p.controller.DemoPaymentController     : Received demo webhook payload: {event=payment.captured, paymentId=pay_demo_12345, orderId=order_demo_67890, amount=150.0, status=success}
2026-01-27T14:25:29.521+05:30  INFO 24752 --- [parkease] [File Watcher] rtingClassPathChangeChangedEventListener : Restarting due to 1 class path change (0 additions, 0 deletions, 1 modification)
2026-01-27T14:25:29.538+05:30  INFO 24752 --- [parkease] [Thread-7] o.s.b.w.e.tomcat.GracefulShutdown        : Commencing graceful shutdown. Waiting for active requests to complete
2026-01-27T14:25:29.554+05:30  INFO 24752 --- [parkease] [tomcat-shutdown] o.s.b.w.e.tomcat.GracefulShutdown        : Graceful shutdown complete
2026-01-27T14:25:29.564+05:30  INFO 24752 --- [parkease] [Thread-7] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopping...
2026-01-27T14:25:29.566+05:30  INFO 24752 --- [parkease] [Thread-7] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=false, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@3910da72]]
2026-01-27T14:25:29.566+05:30  INFO 24752 --- [parkease] [Thread-7] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopped.
2026-01-27T14:25:29.583+05:30  INFO 24752 --- [parkease] [Thread-7] j.LocalContainerEntityManagerFactoryBean : Closing JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T14:25:29.591+05:30  INFO 24752 --- [parkease] [Thread-7] com.zaxxer.hikari.HikariDataSource       : HikariPool-2 - Shutdown initiated...
2026-01-27T14:25:29.600+05:30  INFO 24752 --- [parkease] [Thread-7] com.zaxxer.hikari.HikariDataSource       : HikariPool-2 - Shutdown completed.
2026-01-27T14:25:29.752+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Starting ParkEaseApplication using Java 23.0.1 with PID 24752 (A:\Project_F\backend\target\classes started by ashis in A:\Project_F\backend)
2026-01-27T14:25:29.752+05:30 DEBUG 24752 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Running with Spring Boot v3.4.1, Spring v6.2.1
2026-01-27T14:25:29.753+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : The following 1 profile is active: "dev"
2026-01-27T14:25:30.274+05:30  INFO 24752 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2026-01-27T14:25:30.316+05:30  INFO 24752 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 39 ms. Found 7 JPA repository interfaces.
2026-01-27T14:25:30.607+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8080 (http)
2026-01-27T14:25:30.607+05:30  INFO 24752 --- [parkease] [restartedMain] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2026-01-27T14:25:30.609+05:30  INFO 24752 --- [parkease] [restartedMain] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.34]
2026-01-27T14:25:30.668+05:30  INFO 24752 --- [parkease] [restartedMain] o.a.c.c.C.[Tomcat].[localhost].[/api]    : Initializing Spring embedded WebApplicationContext
2026-01-27T14:25:30.668+05:30  INFO 24752 --- [parkease] [restartedMain] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 913 ms
2026-01-27T14:25:31.081+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer
2026-01-27T14:25:31.083+05:30  INFO 24752 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-3 - Starting...
2026-01-27T14:25:31.144+05:30  INFO 24752 --- [parkease] [restartedMain] com.zaxxer.hikari.pool.HikariPool        : HikariPool-3 - Added connection org.postgresql.jdbc.PgConnection@1f4ec1ba
2026-01-27T14:25:31.145+05:30  INFO 24752 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-3 - Start completed.
2026-01-27T14:25:31.168+05:30  WARN 24752 --- [parkease] [restartedMain] org.hibernate.orm.deprecation            : HHH90000025: PostgreSQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
2026-01-27T14:25:31.719+05:30  INFO 24752 --- [parkease] [restartedMain] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T14:25:31.824+05:30 DEBUG 24752 --- [parkease] [restartedMain] c.p.security.JwtAuthenticationFilter     : Filter 'jwtAuthenticationFilter' configured for use
2026-01-27T14:25:31.965+05:30  INFO 24752 --- [parkease] [restartedMain] eAuthenticationProviderManagerConfigurer : Global AuthenticationManager configured with AuthenticationProvider bean with name authenticationProvider
2026-01-27T14:25:31.966+05:30  WARN 24752 --- [parkease] [restartedMain] r$InitializeUserDetailsManagerConfigurer : Global AuthenticationManager configured with an AuthenticationProvider bean. UserDetailsService beans will not be used by Spring Security for automatically configuring username/password login. Consider removing the AuthenticationProvider bean. Alternatively, consider using the UserDetailsService in a manually instantiated DaoAuthenticationProvider. If the current configuration is intentional, to turn off this warning, increase the logging level of 'org.springframework.security.config.annotation.authentication.configuration.InitializeUserDetailsBeanManagerConfigurer' to ERROR
2026-01-27T14:25:32.330+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.a.e.web.EndpointLinksResolver      : Exposing 1 endpoint beneath base path '/actuator'
2026-01-27T14:25:32.418+05:30  WARN 24752 --- [parkease] [restartedMain] ion$DefaultTemplateResolverConfiguration : Cannot find template location: classpath:/templates/ (please add some templates, check your Thymeleaf configuration, or set spring.thymeleaf.check-template-location=false)
2026-01-27T14:25:32.571+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729
2026-01-27T14:25:32.587+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Starting...
2026-01-27T14:25:32.587+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=true, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@4fed58c5]]
2026-01-27T14:25:32.588+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Started.
2026-01-27T14:25:32.593+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8080 (http) with context path '/api'
2026-01-27T14:25:32.597+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Started ParkEaseApplication in 2.876 seconds (process running for 2282.966)
2026-01-27T14:25:32.639+05:30  INFO 24752 --- [parkease] [restartedMain] .s.b.a.l.ConditionEvaluationReportLogger : 

Error starting ApplicationContext. To display the condition evaluation report re-run your application with 'debug' enabled.
2026-01-27T14:25:32.667+05:30 ERROR 24752 --- [parkease] [restartedMain] o.s.boot.SpringApplication               : Application run failed

java.lang.RuntimeException: ROLE_ADMIN not found
	at com.parkease.seeder.AdminSeeder.lambda$0(AdminSeeder.java:28) ~[classes/:na]
	at java.base/java.util.Optional.orElseThrow(Optional.java:403) ~[na:na]
	at com.parkease.seeder.AdminSeeder.run(AdminSeeder.java:28) ~[classes/:na]
	at org.springframework.boot.SpringApplication.lambda$callRunner$5(SpringApplication.java:788) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.util.function.ThrowingConsumer$1.acceptWithException(ThrowingConsumer.java:82) ~[spring-core-6.2.1.jar:6.2.1]
	at org.springframework.util.function.ThrowingConsumer.accept(ThrowingConsumer.java:60) ~[spring-core-6.2.1.jar:6.2.1]
	at org.springframework.util.function.ThrowingConsumer$1.accept(ThrowingConsumer.java:86) ~[spring-core-6.2.1.jar:6.2.1]
	at org.springframework.boot.SpringApplication.callRunner(SpringApplication.java:796) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.callRunner(SpringApplication.java:787) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.lambda$callRunners$3(SpringApplication.java:772) ~[spring-boot-3.4.1.jar:3.4.1]
	at java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184) ~[na:na]
	at java.base/java.util.stream.SortedOps$SizedRefSortingSink.end(SortedOps.java:357) ~[na:na]
	at java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:571) ~[na:na]
	at java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:560) ~[na:na]
	at java.base/java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151) ~[na:na]
	at java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174) ~[na:na]
	at java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:265) ~[na:na]
	at java.base/java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:636) ~[na:na]
	at org.springframework.boot.SpringApplication.callRunners(SpringApplication.java:772) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:325) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]

2026-01-27T14:25:32.676+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.w.e.tomcat.GracefulShutdown        : Commencing graceful shutdown. Waiting for active requests to complete
2026-01-27T14:25:32.685+05:30  INFO 24752 --- [parkease] [tomcat-shutdown] o.s.b.w.e.tomcat.GracefulShutdown        : Graceful shutdown complete
2026-01-27T14:25:32.686+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopping...
2026-01-27T14:25:32.686+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=false, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@4fed58c5]]
2026-01-27T14:25:32.686+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopped.
2026-01-27T14:25:32.688+05:30  INFO 24752 --- [parkease] [restartedMain] j.LocalContainerEntityManagerFactoryBean : Closing JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T14:25:32.689+05:30  INFO 24752 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-3 - Shutdown initiated...
2026-01-27T14:25:32.691+05:30  INFO 24752 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-3 - Shutdown completed.
2026-01-27T17:04:11.319+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Starting ParkEaseApplication using Java 23.0.1 with PID 24752 (A:\Project_F\backend\target\classes started by ashis in A:\Project_F\backend)
2026-01-27T17:04:11.325+05:30 DEBUG 24752 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Running with Spring Boot v3.4.1, Spring v6.2.1
2026-01-27T17:04:11.325+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : The following 1 profile is active: "dev"
2026-01-27T17:04:14.794+05:30  INFO 24752 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2026-01-27T17:04:15.025+05:30  INFO 24752 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 220 ms. Found 7 JPA repository interfaces.
2026-01-27T17:04:16.659+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8080 (http)
2026-01-27T17:04:16.676+05:30  INFO 24752 --- [parkease] [restartedMain] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2026-01-27T17:04:16.676+05:30  INFO 24752 --- [parkease] [restartedMain] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.34]
2026-01-27T17:04:16.815+05:30  INFO 24752 --- [parkease] [restartedMain] o.a.c.c.C.[Tomcat].[localhost].[/api]    : Initializing Spring embedded WebApplicationContext
2026-01-27T17:04:16.815+05:30  INFO 24752 --- [parkease] [restartedMain] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 5438 ms
2026-01-27T17:04:17.231+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer
2026-01-27T17:04:17.238+05:30  INFO 24752 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-4 - Starting...
2026-01-27T17:04:17.480+05:30  INFO 24752 --- [parkease] [restartedMain] com.zaxxer.hikari.pool.HikariPool        : HikariPool-4 - Added connection org.postgresql.jdbc.PgConnection@19095fb0
2026-01-27T17:04:17.481+05:30  INFO 24752 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-4 - Start completed.
2026-01-27T17:04:17.541+05:30  WARN 24752 --- [parkease] [restartedMain] org.hibernate.orm.deprecation            : HHH90000025: PostgreSQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
2026-01-27T17:04:18.799+05:30  INFO 24752 --- [parkease] [restartedMain] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T17:04:19.105+05:30 DEBUG 24752 --- [parkease] [restartedMain] c.p.security.JwtAuthenticationFilter     : Filter 'jwtAuthenticationFilter' configured for use
2026-01-27T17:04:19.553+05:30  INFO 24752 --- [parkease] [restartedMain] eAuthenticationProviderManagerConfigurer : Global AuthenticationManager configured with AuthenticationProvider bean with name authenticationProvider
2026-01-27T17:04:19.553+05:30  WARN 24752 --- [parkease] [restartedMain] r$InitializeUserDetailsManagerConfigurer : Global AuthenticationManager configured with an AuthenticationProvider bean. UserDetailsService beans will not be used by Spring Security for automatically configuring username/password login. Consider removing the AuthenticationProvider bean. Alternatively, consider using the UserDetailsService in a manually instantiated DaoAuthenticationProvider. If the current configuration is intentional, to turn off this warning, increase the logging level of 'org.springframework.security.config.annotation.authentication.configuration.InitializeUserDetailsBeanManagerConfigurer' to ERROR
2026-01-27T17:04:20.774+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.a.e.web.EndpointLinksResolver      : Exposing 1 endpoint beneath base path '/actuator'
2026-01-27T17:04:21.036+05:30  WARN 24752 --- [parkease] [restartedMain] ion$DefaultTemplateResolverConfiguration : Cannot find template location: classpath:/templates/ (please add some templates, check your Thymeleaf configuration, or set spring.thymeleaf.check-template-location=false)
2026-01-27T17:04:21.427+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729
2026-01-27T17:04:21.457+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Starting...
2026-01-27T17:04:21.458+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=true, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@640dc685]]
2026-01-27T17:04:21.458+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Started.
2026-01-27T17:04:21.470+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8080 (http) with context path '/api'
2026-01-27T17:04:21.483+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Started ParkEaseApplication in 10.827 seconds (process running for 11811.873)
2026-01-27T17:04:21.580+05:30  INFO 24752 --- [parkease] [restartedMain] .s.b.a.l.ConditionEvaluationReportLogger : 

Error starting ApplicationContext. To display the condition evaluation report re-run your application with 'debug' enabled.
2026-01-27T17:04:21.587+05:30 ERROR 24752 --- [parkease] [restartedMain] o.s.boot.SpringApplication               : Application run failed

java.lang.RuntimeException: ROLE_ADMIN not found
	at com.parkease.seeder.AdminSeeder.lambda$0(AdminSeeder.java:28) ~[classes/:na]
	at java.base/java.util.Optional.orElseThrow(Optional.java:403) ~[na:na]
	at com.parkease.seeder.AdminSeeder.run(AdminSeeder.java:28) ~[classes/:na]
	at org.springframework.boot.SpringApplication.lambda$callRunner$5(SpringApplication.java:788) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.util.function.ThrowingConsumer$1.acceptWithException(ThrowingConsumer.java:82) ~[spring-core-6.2.1.jar:6.2.1]
	at org.springframework.util.function.ThrowingConsumer.accept(ThrowingConsumer.java:60) ~[spring-core-6.2.1.jar:6.2.1]
	at org.springframework.util.function.ThrowingConsumer$1.accept(ThrowingConsumer.java:86) ~[spring-core-6.2.1.jar:6.2.1]
	at org.springframework.boot.SpringApplication.callRunner(SpringApplication.java:796) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.callRunner(SpringApplication.java:787) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.lambda$callRunners$3(SpringApplication.java:772) ~[spring-boot-3.4.1.jar:3.4.1]
	at java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184) ~[na:na]
	at java.base/java.util.stream.SortedOps$SizedRefSortingSink.end(SortedOps.java:357) ~[na:na]
	at java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:571) ~[na:na]
	at java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:560) ~[na:na]
	at java.base/java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151) ~[na:na]
	at java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174) ~[na:na]
	at java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:265) ~[na:na]
	at java.base/java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:636) ~[na:na]
	at org.springframework.boot.SpringApplication.callRunners(SpringApplication.java:772) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:325) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]

2026-01-27T17:04:21.591+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.w.e.tomcat.GracefulShutdown        : Commencing graceful shutdown. Waiting for active requests to complete
2026-01-27T17:04:21.628+05:30  INFO 24752 --- [parkease] [tomcat-shutdown] o.s.b.w.e.tomcat.GracefulShutdown        : Graceful shutdown complete
2026-01-27T17:04:21.629+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopping...
2026-01-27T17:04:21.630+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=false, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@640dc685]]
2026-01-27T17:04:21.630+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopped.
2026-01-27T17:04:21.635+05:30  INFO 24752 --- [parkease] [restartedMain] j.LocalContainerEntityManagerFactoryBean : Closing JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T17:04:21.637+05:30  INFO 24752 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-4 - Shutdown initiated...
2026-01-27T17:04:21.649+05:30  INFO 24752 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-4 - Shutdown completed.
2026-01-27T17:19:26.087+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Starting ParkEaseApplication using Java 23.0.1 with PID 24752 (A:\Project_F\backend\target\classes started by ashis in A:\Project_F\backend)
2026-01-27T17:19:26.093+05:30 DEBUG 24752 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Running with Spring Boot v3.4.1, Spring v6.2.1
2026-01-27T17:19:26.093+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : The following 1 profile is active: "dev"
2026-01-27T17:19:28.201+05:30  INFO 24752 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2026-01-27T17:19:28.465+05:30  INFO 24752 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 253 ms. Found 7 JPA repository interfaces.
2026-01-27T17:19:29.393+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8080 (http)
2026-01-27T17:19:29.419+05:30  INFO 24752 --- [parkease] [restartedMain] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2026-01-27T17:19:29.420+05:30  INFO 24752 --- [parkease] [restartedMain] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.34]
2026-01-27T17:19:29.490+05:30  INFO 24752 --- [parkease] [restartedMain] o.a.c.c.C.[Tomcat].[localhost].[/api]    : Initializing Spring embedded WebApplicationContext
2026-01-27T17:19:29.491+05:30  INFO 24752 --- [parkease] [restartedMain] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 3361 ms
2026-01-27T17:19:30.075+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer
2026-01-27T17:19:30.087+05:30  INFO 24752 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-5 - Starting...
2026-01-27T17:19:30.304+05:30  INFO 24752 --- [parkease] [restartedMain] com.zaxxer.hikari.pool.HikariPool        : HikariPool-5 - Added connection org.postgresql.jdbc.PgConnection@4add674e
2026-01-27T17:19:30.306+05:30  INFO 24752 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-5 - Start completed.
2026-01-27T17:19:30.385+05:30  WARN 24752 --- [parkease] [restartedMain] org.hibernate.orm.deprecation            : HHH90000025: PostgreSQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
2026-01-27T17:19:31.205+05:30  INFO 24752 --- [parkease] [restartedMain] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T17:19:31.474+05:30 DEBUG 24752 --- [parkease] [restartedMain] c.p.security.JwtAuthenticationFilter     : Filter 'jwtAuthenticationFilter' configured for use
2026-01-27T17:19:31.830+05:30  INFO 24752 --- [parkease] [restartedMain] eAuthenticationProviderManagerConfigurer : Global AuthenticationManager configured with AuthenticationProvider bean with name authenticationProvider
2026-01-27T17:19:31.830+05:30  WARN 24752 --- [parkease] [restartedMain] r$InitializeUserDetailsManagerConfigurer : Global AuthenticationManager configured with an AuthenticationProvider bean. UserDetailsService beans will not be used by Spring Security for automatically configuring username/password login. Consider removing the AuthenticationProvider bean. Alternatively, consider using the UserDetailsService in a manually instantiated DaoAuthenticationProvider. If the current configuration is intentional, to turn off this warning, increase the logging level of 'org.springframework.security.config.annotation.authentication.configuration.InitializeUserDetailsBeanManagerConfigurer' to ERROR
2026-01-27T17:19:32.637+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.a.e.web.EndpointLinksResolver      : Exposing 1 endpoint beneath base path '/actuator'
2026-01-27T17:19:32.913+05:30  WARN 24752 --- [parkease] [restartedMain] ion$DefaultTemplateResolverConfiguration : Cannot find template location: classpath:/templates/ (please add some templates, check your Thymeleaf configuration, or set spring.thymeleaf.check-template-location=false)
2026-01-27T17:19:33.200+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729
2026-01-27T17:19:33.231+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Starting...
2026-01-27T17:19:33.231+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=true, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@64dd6466]]
2026-01-27T17:19:33.233+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Started.
2026-01-27T17:19:33.245+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8080 (http) with context path '/api'
2026-01-27T17:19:33.255+05:30  INFO 24752 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Started ParkEaseApplication in 7.938 seconds (process running for 12720.448)
2026-01-27T17:19:33.343+05:30  INFO 24752 --- [parkease] [restartedMain] .s.b.a.l.ConditionEvaluationReportLogger : 

Error starting ApplicationContext. To display the condition evaluation report re-run your application with 'debug' enabled.
2026-01-27T17:19:33.351+05:30 ERROR 24752 --- [parkease] [restartedMain] o.s.boot.SpringApplication               : Application run failed

java.lang.RuntimeException: ROLE_ADMIN not found
	at com.parkease.seeder.AdminSeeder.lambda$0(AdminSeeder.java:28) ~[classes/:na]
	at java.base/java.util.Optional.orElseThrow(Optional.java:403) ~[na:na]
	at com.parkease.seeder.AdminSeeder.run(AdminSeeder.java:28) ~[classes/:na]
	at org.springframework.boot.SpringApplication.lambda$callRunner$5(SpringApplication.java:788) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.util.function.ThrowingConsumer$1.acceptWithException(ThrowingConsumer.java:82) ~[spring-core-6.2.1.jar:6.2.1]
	at org.springframework.util.function.ThrowingConsumer.accept(ThrowingConsumer.java:60) ~[spring-core-6.2.1.jar:6.2.1]
	at org.springframework.util.function.ThrowingConsumer$1.accept(ThrowingConsumer.java:86) ~[spring-core-6.2.1.jar:6.2.1]
	at org.springframework.boot.SpringApplication.callRunner(SpringApplication.java:796) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.callRunner(SpringApplication.java:787) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.lambda$callRunners$3(SpringApplication.java:772) ~[spring-boot-3.4.1.jar:3.4.1]
	at java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184) ~[na:na]
	at java.base/java.util.stream.SortedOps$SizedRefSortingSink.end(SortedOps.java:357) ~[na:na]
	at java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:571) ~[na:na]
	at java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:560) ~[na:na]
	at java.base/java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151) ~[na:na]
	at java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174) ~[na:na]
	at java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:265) ~[na:na]
	at java.base/java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:636) ~[na:na]
	at org.springframework.boot.SpringApplication.callRunners(SpringApplication.java:772) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:325) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1361) ~[spring-boot-3.4.1.jar:3.4.1]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1350) ~[spring-boot-3.4.1.jar:3.4.1]
	at com.parkease.ParkEaseApplication.main(ParkEaseApplication.java:10) ~[classes/:na]
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:580) ~[na:na]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:50) ~[spring-boot-devtools-3.4.1.jar:3.4.1]

2026-01-27T17:19:33.359+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.b.w.e.tomcat.GracefulShutdown        : Commencing graceful shutdown. Waiting for active requests to complete
2026-01-27T17:19:33.388+05:30  INFO 24752 --- [parkease] [tomcat-shutdown] o.s.b.w.e.tomcat.GracefulShutdown        : Graceful shutdown complete
2026-01-27T17:19:33.392+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopping...
2026-01-27T17:19:33.392+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=false, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@64dd6466]]
2026-01-27T17:19:33.392+05:30  INFO 24752 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopped.
2026-01-27T17:19:33.397+05:30  INFO 24752 --- [parkease] [restartedMain] j.LocalContainerEntityManagerFactoryBean : Closing JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T17:19:33.399+05:30  INFO 24752 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-5 - Shutdown initiated...
2026-01-27T17:19:33.408+05:30  INFO 24752 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-5 - Shutdown completed.
2026-01-27T17:33:04.164+05:30  INFO 29988 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Starting ParkEaseApplication using Java 23.0.1 with PID 29988 (A:\Project_F\backend\target\classes started by ashis in A:\Project_F\backend)
2026-01-27T17:33:04.168+05:30 DEBUG 29988 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Running with Spring Boot v3.4.1, Spring v6.2.1
2026-01-27T17:33:04.170+05:30  INFO 29988 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : The following 1 profile is active: "dev"
2026-01-27T17:33:04.384+05:30  INFO 29988 --- [parkease] [restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : Devtools property defaults active! Set 'spring.devtools.add-properties' to 'false' to disable
2026-01-27T17:33:04.386+05:30  INFO 29988 --- [parkease] [restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : For additional web related logging consider setting the 'logging.level.web' property to 'DEBUG'
2026-01-27T17:33:08.442+05:30  INFO 29988 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2026-01-27T17:33:08.704+05:30  INFO 29988 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 233 ms. Found 7 JPA repository interfaces.
2026-01-27T17:33:12.582+05:30  INFO 29988 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8080 (http)
2026-01-27T17:33:12.631+05:30  INFO 29988 --- [parkease] [restartedMain] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2026-01-27T17:33:12.632+05:30  INFO 29988 --- [parkease] [restartedMain] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.34]
2026-01-27T17:33:12.821+05:30  INFO 29988 --- [parkease] [restartedMain] o.a.c.c.C.[Tomcat].[localhost].[/api]    : Initializing Spring embedded WebApplicationContext
2026-01-27T17:33:12.823+05:30  INFO 29988 --- [parkease] [restartedMain] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 8436 ms
2026-01-27T17:33:15.548+05:30  INFO 29988 --- [parkease] [restartedMain] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer
2026-01-27T17:33:15.635+05:30  INFO 29988 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
2026-01-27T17:33:16.375+05:30  INFO 29988 --- [parkease] [restartedMain] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection org.postgresql.jdbc.PgConnection@4f857860
2026-01-27T17:33:16.380+05:30  INFO 29988 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
2026-01-27T17:33:16.525+05:30  WARN 29988 --- [parkease] [restartedMain] org.hibernate.orm.deprecation            : HHH90000025: PostgreSQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
2026-01-27T17:33:20.585+05:30  INFO 29988 --- [parkease] [restartedMain] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T17:33:21.979+05:30 DEBUG 29988 --- [parkease] [restartedMain] c.p.security.JwtAuthenticationFilter     : Filter 'jwtAuthenticationFilter' configured for use
2026-01-27T17:33:22.212+05:30  INFO 29988 --- [parkease] [restartedMain] o.s.d.j.r.query.QueryEnhancerFactory     : Hibernate is in classpath; If applicable, HQL parser will be used.
2026-01-27T17:33:26.686+05:30  INFO 29988 --- [parkease] [restartedMain] eAuthenticationProviderManagerConfigurer : Global AuthenticationManager configured with AuthenticationProvider bean with name authenticationProvider
2026-01-27T17:33:26.687+05:30  WARN 29988 --- [parkease] [restartedMain] r$InitializeUserDetailsManagerConfigurer : Global AuthenticationManager configured with an AuthenticationProvider bean. UserDetailsService beans will not be used by Spring Security for automatically configuring username/password login. Consider removing the AuthenticationProvider bean. Alternatively, consider using the UserDetailsService in a manually instantiated DaoAuthenticationProvider. If the current configuration is intentional, to turn off this warning, increase the logging level of 'org.springframework.security.config.annotation.authentication.configuration.InitializeUserDetailsBeanManagerConfigurer' to ERROR
2026-01-27T17:33:29.169+05:30  INFO 29988 --- [parkease] [restartedMain] o.s.b.a.e.web.EndpointLinksResolver      : Exposing 1 endpoint beneath base path '/actuator'
2026-01-27T17:33:29.741+05:30  WARN 29988 --- [parkease] [restartedMain] ion$DefaultTemplateResolverConfiguration : Cannot find template location: classpath:/templates/ (please add some templates, check your Thymeleaf configuration, or set spring.thymeleaf.check-template-location=false)
2026-01-27T17:33:30.566+05:30  INFO 29988 --- [parkease] [restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729
2026-01-27T17:33:30.743+05:30  INFO 29988 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Starting...
2026-01-27T17:33:30.744+05:30  INFO 29988 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=true, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@383e74bc]]
2026-01-27T17:33:30.745+05:30  INFO 29988 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Started.
2026-01-27T17:33:30.831+05:30  INFO 29988 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8080 (http) with context path '/api'
2026-01-27T17:33:30.879+05:30  INFO 29988 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Started ParkEaseApplication in 28.029 seconds (process running for 29.381)
2026-01-27T17:33:31.185+05:30  INFO 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : <<<< FORCE-RESEEDING DEMO DATA >>>>
2026-01-27T17:33:31.281+05:30  INFO 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : ✅ Database cleaned
2026-01-27T17:33:31.455+05:30  INFO 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Roles seeded: USER, ADMIN
2026-01-27T17:33:31.524+05:30  INFO 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Base prices seeded for all vehicle types
2026-01-27T17:33:31.815+05:30  INFO 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Admin user seeded
2026-01-27T17:33:33.172+05:30  INFO 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 10 demo users
2026-01-27T17:33:33.205+05:30  INFO 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 4 parking zones
2026-01-27T17:33:33.225+05:30  INFO 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Downtown Parking
2026-01-27T17:33:33.231+05:30  INFO 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Mall Parking
2026-01-27T17:33:33.235+05:30  INFO 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Airport Parking
2026-01-27T17:33:33.243+05:30  INFO 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Hospital Parking
2026-01-27T17:33:33.368+05:30  INFO 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 80 new parking slots
2026-01-27T17:33:33.398+05:30  WARN 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 0: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T17:33:33.400+05:30  WARN 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 4: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T17:33:33.400+05:30  WARN 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 5: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T17:33:33.400+05:30  WARN 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 7: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T17:33:33.401+05:30  WARN 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 11: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T17:33:33.401+05:30  WARN 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 19: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T17:33:33.402+05:30  WARN 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 21: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T17:33:33.404+05:30  WARN 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 27: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T17:33:33.404+05:30  WARN 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 28: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T17:33:33.404+05:30  WARN 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 29: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T17:33:33.404+05:30  WARN 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 31: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T17:33:33.405+05:30  WARN 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 41: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T17:33:33.405+05:30  WARN 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 44: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T17:33:33.406+05:30  WARN 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 49: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T17:33:33.532+05:30  INFO 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 36 demo reservations
2026-01-27T17:33:33.532+05:30  INFO 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : ✅ Demo data seeding completed successfully
2026-01-27T17:33:33.544+05:30  INFO 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Zone Count: 4
2026-01-27T17:33:33.556+05:30  INFO 29988 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Slot Count: 80
2026-01-27T17:34:30.651+05:30  INFO 29988 --- [parkease] [MessageBroker-2] o.s.w.s.c.WebSocketMessageBrokerStats    : WebSocketSession[0 current WS(0)-HttpStream(0)-HttpPoll(0), 0 total, 0 closed abnormally (0 connect failure, 0 send limit, 0 transport error)], stompSubProtocol[processed CONNECT(0)-CONNECTED(0)-DISCONNECT(0)], stompBrokerRelay[null], inboundChannel[pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0], outboundChannel[pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0], sockJsScheduler[pool size = 3, active threads = 1, queued tasks = 1, completed tasks = 1]
2026-01-27T17:52:54.405+05:30  INFO 29988 --- [parkease] [SpringApplicationShutdownHook] o.s.b.w.e.tomcat.GracefulShutdown        : Commencing graceful shutdown. Waiting for active requests to complete
2026-01-27T17:52:54.595+05:30  INFO 29988 --- [parkease] [tomcat-shutdown] o.s.b.w.e.tomcat.GracefulShutdown        : Graceful shutdown complete
2026-01-27T17:52:54.654+05:30  INFO 29988 --- [parkease] [SpringApplicationShutdownHook] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopping...
2026-01-27T17:52:54.665+05:30  INFO 29988 --- [parkease] [SpringApplicationShutdownHook] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=false, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@383e74bc]]
2026-01-27T17:52:54.665+05:30  INFO 29988 --- [parkease] [SpringApplicationShutdownHook] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopped.
2026-01-27T17:52:54.838+05:30  INFO 29988 --- [parkease] [SpringApplicationShutdownHook] j.LocalContainerEntityManagerFactoryBean : Closing JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T17:52:55.076+05:30  INFO 29988 --- [parkease] [SpringApplicationShutdownHook] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown initiated...
2026-01-27T17:52:55.187+05:30  INFO 29988 --- [parkease] [SpringApplicationShutdownHook] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown completed.
2026-01-27T18:43:38.080+05:30  INFO 32876 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Starting ParkEaseApplication using Java 23.0.1 with PID 32876 (A:\Project_F\backend\target\classes started by ashis in A:\Project_F\backend)
2026-01-27T18:43:38.082+05:30 DEBUG 32876 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Running with Spring Boot v3.4.1, Spring v6.2.1
2026-01-27T18:43:38.083+05:30  INFO 32876 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : The following 1 profile is active: "dev"
2026-01-27T18:43:38.153+05:30  INFO 32876 --- [parkease] [restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : Devtools property defaults active! Set 'spring.devtools.add-properties' to 'false' to disable
2026-01-27T18:43:38.153+05:30  INFO 32876 --- [parkease] [restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : For additional web related logging consider setting the 'logging.level.web' property to 'DEBUG'
2026-01-27T18:43:39.641+05:30  INFO 32876 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2026-01-27T18:43:39.736+05:30  INFO 32876 --- [parkease] [restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 83 ms. Found 7 JPA repository interfaces.
2026-01-27T18:43:41.204+05:30  INFO 32876 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8080 (http)
2026-01-27T18:43:41.220+05:30  INFO 32876 --- [parkease] [restartedMain] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2026-01-27T18:43:41.221+05:30  INFO 32876 --- [parkease] [restartedMain] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.34]
2026-01-27T18:43:41.290+05:30  INFO 32876 --- [parkease] [restartedMain] o.a.c.c.C.[Tomcat].[localhost].[/api]    : Initializing Spring embedded WebApplicationContext
2026-01-27T18:43:41.291+05:30  INFO 32876 --- [parkease] [restartedMain] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 3137 ms
2026-01-27T18:43:42.219+05:30  INFO 32876 --- [parkease] [restartedMain] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer
2026-01-27T18:43:42.248+05:30  INFO 32876 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
2026-01-27T18:43:42.474+05:30  INFO 32876 --- [parkease] [restartedMain] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection org.postgresql.jdbc.PgConnection@44286d8
2026-01-27T18:43:42.475+05:30  INFO 32876 --- [parkease] [restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
2026-01-27T18:43:42.520+05:30  WARN 32876 --- [parkease] [restartedMain] org.hibernate.orm.deprecation            : HHH90000025: PostgreSQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
2026-01-27T18:43:43.847+05:30  INFO 32876 --- [parkease] [restartedMain] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T18:43:44.320+05:30 DEBUG 32876 --- [parkease] [restartedMain] c.p.security.JwtAuthenticationFilter     : Filter 'jwtAuthenticationFilter' configured for use
2026-01-27T18:43:44.420+05:30  INFO 32876 --- [parkease] [restartedMain] o.s.d.j.r.query.QueryEnhancerFactory     : Hibernate is in classpath; If applicable, HQL parser will be used.
2026-01-27T18:43:46.264+05:30  INFO 32876 --- [parkease] [restartedMain] eAuthenticationProviderManagerConfigurer : Global AuthenticationManager configured with AuthenticationProvider bean with name authenticationProvider
2026-01-27T18:43:46.265+05:30  WARN 32876 --- [parkease] [restartedMain] r$InitializeUserDetailsManagerConfigurer : Global AuthenticationManager configured with an AuthenticationProvider bean. UserDetailsService beans will not be used by Spring Security for automatically configuring username/password login. Consider removing the AuthenticationProvider bean. Alternatively, consider using the UserDetailsService in a manually instantiated DaoAuthenticationProvider. If the current configuration is intentional, to turn off this warning, increase the logging level of 'org.springframework.security.config.annotation.authentication.configuration.InitializeUserDetailsBeanManagerConfigurer' to ERROR
2026-01-27T18:43:47.285+05:30  INFO 32876 --- [parkease] [restartedMain] o.s.b.a.e.web.EndpointLinksResolver      : Exposing 1 endpoint beneath base path '/actuator'
2026-01-27T18:43:47.590+05:30  WARN 32876 --- [parkease] [restartedMain] ion$DefaultTemplateResolverConfiguration : Cannot find template location: classpath:/templates/ (please add some templates, check your Thymeleaf configuration, or set spring.thymeleaf.check-template-location=false)
2026-01-27T18:43:48.013+05:30  INFO 32876 --- [parkease] [restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729
2026-01-27T18:43:48.103+05:30  INFO 32876 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Starting...
2026-01-27T18:43:48.104+05:30  INFO 32876 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=true, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@6e842294]]
2026-01-27T18:43:48.105+05:30  INFO 32876 --- [parkease] [restartedMain] o.s.m.s.b.SimpleBrokerMessageHandler     : Started.
2026-01-27T18:43:48.137+05:30  INFO 32876 --- [parkease] [restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8080 (http) with context path '/api'
2026-01-27T18:43:48.151+05:30  INFO 32876 --- [parkease] [restartedMain] com.parkease.ParkEaseApplication         : Started ParkEaseApplication in 10.643 seconds (process running for 11.529)
2026-01-27T18:43:48.394+05:30  INFO 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : <<<< FORCE-RESEEDING DEMO DATA >>>>
2026-01-27T18:43:48.432+05:30  INFO 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : ✅ Database cleaned
2026-01-27T18:43:48.494+05:30  INFO 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 4 parking zones
2026-01-27T18:43:48.510+05:30  INFO 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Downtown Parking
2026-01-27T18:43:48.514+05:30  INFO 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Mall Parking
2026-01-27T18:43:48.516+05:30  INFO 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Airport Parking
2026-01-27T18:43:48.518+05:30  INFO 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeding 20 slots for zone: Hospital Parking
2026-01-27T18:43:48.589+05:30  INFO 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 80 new parking slots
2026-01-27T18:43:48.621+05:30  WARN 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 0: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T18:43:48.621+05:30  WARN 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 2: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T18:43:48.621+05:30  WARN 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 5: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T18:43:48.622+05:30  WARN 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 6: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T18:43:48.622+05:30  WARN 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 8: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T18:43:48.622+05:30  WARN 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 9: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T18:43:48.622+05:30  WARN 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 10: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T18:43:48.622+05:30  WARN 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 11: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T18:43:48.622+05:30  WARN 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 12: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T18:43:48.623+05:30  WARN 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 22: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T18:43:48.623+05:30  WARN 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 25: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T18:43:48.623+05:30  WARN 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 32: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T18:43:48.623+05:30  WARN 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 33: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T18:43:48.623+05:30  WARN 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 34: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T18:43:48.624+05:30  WARN 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 45: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T18:43:48.624+05:30  WARN 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Failed to create demo reservation 46: No enum constant com.parkease.entity.Reservation.ReservationStatus.COMPLETED
2026-01-27T18:43:48.674+05:30  INFO 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Seeded 34 demo reservations
2026-01-27T18:43:48.674+05:30  INFO 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : ✅ Demo data seeding completed successfully
2026-01-27T18:43:48.678+05:30  INFO 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Zone Count: 4
2026-01-27T18:43:48.684+05:30  INFO 32876 --- [parkease] [restartedMain] com.parkease.seeder.DemoDataSeeder       : Slot Count: 80
2026-01-27T18:44:48.060+05:30  INFO 32876 --- [parkease] [MessageBroker-2] o.s.w.s.c.WebSocketMessageBrokerStats    : WebSocketSession[0 current WS(0)-HttpStream(0)-HttpPoll(0), 0 total, 0 closed abnormally (0 connect failure, 0 send limit, 0 transport error)], stompSubProtocol[processed CONNECT(0)-CONNECTED(0)-DISCONNECT(0)], stompBrokerRelay[null], inboundChannel[pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0], outboundChannel[pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0], sockJsScheduler[pool size = 3, active threads = 1, queued tasks = 1, completed tasks = 1]
2026-01-27T18:47:02.407+05:30  INFO 32876 --- [parkease] [http-nio-8080-exec-2] o.a.c.c.C.[Tomcat].[localhost].[/api]    : Initializing Spring DispatcherServlet 'dispatcherServlet'
2026-01-27T18:47:02.415+05:30  INFO 32876 --- [parkease] [http-nio-8080-exec-2] o.s.web.servlet.DispatcherServlet        : Initializing Servlet 'dispatcherServlet'
2026-01-27T18:47:02.490+05:30  INFO 32876 --- [parkease] [http-nio-8080-exec-2] o.s.web.servlet.DispatcherServlet        : Completed initialization in 74 ms
2026-01-27T18:47:20.864+05:30  INFO 32876 --- [parkease] [http-nio-8080-exec-4] c.parkease.controller.PaymentController  : DEMO MODE: Initiating demo payment for reservation: 1
2026-01-27T18:47:34.721+05:30  INFO 32876 --- [parkease] [http-nio-8080-exec-5] c.parkease.controller.PaymentController  : DEMO MODE: Initiating demo payment for reservation: 1
2026-01-27T18:49:01.428+05:30  INFO 32876 --- [parkease] [SpringApplicationShutdownHook] o.s.b.w.e.tomcat.GracefulShutdown        : Commencing graceful shutdown. Waiting for active requests to complete
2026-01-27T18:49:01.460+05:30  INFO 32876 --- [parkease] [tomcat-shutdown] o.s.b.w.e.tomcat.GracefulShutdown        : Graceful shutdown complete
2026-01-27T18:49:01.470+05:30  INFO 32876 --- [parkease] [SpringApplicationShutdownHook] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopping...
2026-01-27T18:49:01.472+05:30  INFO 32876 --- [parkease] [SpringApplicationShutdownHook] o.s.m.s.b.SimpleBrokerMessageHandler     : BrokerAvailabilityEvent[available=false, SimpleBrokerMessageHandler [org.springframework.messaging.simp.broker.DefaultSubscriptionRegistry@6e842294]]
2026-01-27T18:49:01.472+05:30  INFO 32876 --- [parkease] [SpringApplicationShutdownHook] o.s.m.s.b.SimpleBrokerMessageHandler     : Stopped.
2026-01-27T18:49:01.509+05:30  INFO 32876 --- [parkease] [SpringApplicationShutdownHook] j.LocalContainerEntityManagerFactoryBean : Closing JPA EntityManagerFactory for persistence unit 'default'
2026-01-27T18:49:01.548+05:30  INFO 32876 --- [parkease] [SpringApplicationShutdownHook] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown initiated...
2026-01-27T18:49:01.565+05:30  INFO 32876 --- [parkease] [SpringApplicationShutdownHook] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown completed.

```

---

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `qrcodes/PZ1_SA1.png`

### <a id="📄-src-main-java-com-parkease-config-corsconfig-java"></a>📄 `src/main/java/com/parkease/config/CorsConfig.java`

**File Info:**
- **Size**: 1.88 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/config/CorsConfig.java`
- **Relative Path**: `src/main/java/com/parkease/config`
- **Created**: 2026-01-26 00:29:45 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-27 07:00:24 (Asia/Calcutta / GMT+06:30)
- **MD5**: `859aee816c7f890c9f736611e1ee05fb`
- **SHA256**: `754407bc5c5523cc84172d0f1269c25ba646eefba17602401b337950b5206fc5`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
public class CorsConfig {

        @Bean
        public UrlBasedCorsConfigurationSource corsConfigurationSource() {
                CorsConfiguration config = new CorsConfiguration();

                // Allow frontend origin
                config.setAllowedOrigins(Arrays.asList(
                                "http://localhost:5173",
                                "http://localhost:3000"));

                // Allow all methods
                config.setAllowedMethods(Arrays.asList(
                                "GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"));

                // Allow headers
                config.setAllowedHeaders(Arrays.asList(
                                "Authorization",
                                "Content-Type",
                                "Accept",
                                "Origin",
                                "X-Requested-With",
                                "Cache-Control"));

                // Expose response headers
                config.setExposedHeaders(Arrays.asList(
                                "Authorization",
                                "Content-Type"));

                // Allow credentials
                config.setAllowCredentials(true);

                // Cache preflight
                config.setMaxAge(3600L);

                // Apply to all endpoints
                UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
                source.registerCorsConfiguration("/**", config);

                return source;
        }
}

```

---

### <a id="📄-src-main-java-com-parkease-config-emailconfig-java"></a>📄 `src/main/java/com/parkease/config/EmailConfig.java`

**File Info:**
- **Size**: 1.45 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/config/EmailConfig.java`
- **Relative Path**: `src/main/java/com/parkease/config`
- **Created**: 2026-01-26 00:29:45 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-25 23:03:47 (Asia/Calcutta / GMT+06:30)
- **MD5**: `7b685547aaa252774dfb0cae5db092ed`
- **SHA256**: `411de140eef043c3965289cc6ccfb8647ba469ba6d6570902b0f4b9e5e8e031b`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.config;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

/**
 * Email configuration for demo mode
 * Creates a mock JavaMailSender when email.demo-mode is true
 */
@Configuration
public class EmailConfig {

    @Bean
    @ConditionalOnProperty(name = "email.demo-mode", havingValue = "false", matchIfMissing = false)
    public JavaMailSender javaMailSender() {
        // Real mail sender configuration (not used in demo)
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.gmail.com");
        mailSender.setPort(587);

        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");

        return mailSender;
    }

    @Bean
    @ConditionalOnProperty(name = "email.demo-mode", havingValue = "true", matchIfMissing = true)
    public JavaMailSender demoMailSender() {
        // Mock mail sender for demo mode
        return new JavaMailSenderImpl(); // Returns a basic implementation that doesn't send real emails
    }
}

```

---

### <a id="📄-src-main-java-com-parkease-config-schedulerconfig-java"></a>📄 `src/main/java/com/parkease/config/SchedulerConfig.java`

**File Info:**
- **Size**: 241 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/config/SchedulerConfig.java`
- **Relative Path**: `src/main/java/com/parkease/config`
- **Created**: 2026-01-26 00:29:45 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-18 08:52:35 (Asia/Calcutta / GMT+06:30)
- **MD5**: `3fcb7f8c0005160ee7e588e2edf5c022`
- **SHA256**: `7894f1f45ba749056201f590a355e69e630561f0a7a97468ea03430b8cb5f2d2`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;

@Configuration
@EnableScheduling 
public class SchedulerConfig {
    
}

```

---

### <a id="📄-src-main-java-com-parkease-config-websocketconfig-java"></a>📄 `src/main/java/com/parkease/config/WebSocketConfig.java`

**File Info:**
- **Size**: 975 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/config/WebSocketConfig.java`
- **Relative Path**: `src/main/java/com/parkease/config`
- **Created**: 2026-01-26 00:29:45 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 11:18:01 (Asia/Calcutta / GMT+06:30)
- **MD5**: `aef51f1b689a547b2f8c79c41b19d2e8`
- **SHA256**: `2279e8e23ea9a822fac2265a5802017d982fcec1718d75d92aa5c3cbcca6aa9e`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/topic");
        config.setApplicationDestinationPrefixes("/app");
    }
    
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws")
                .setAllowedOriginPatterns("*")
                .withSockJS();
    }
}
```

---

### <a id="📄-src-main-java-com-parkease-controller-admincontroller-java"></a>📄 `src/main/java/com/parkease/controller/AdminController.java`

**File Info:**
- **Size**: 2.27 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/controller/AdminController.java`
- **Relative Path**: `src/main/java/com/parkease/controller`
- **Created**: 2026-01-26 00:29:45 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-26 07:27:46 (Asia/Calcutta / GMT+06:30)
- **MD5**: `f36b93825504b6e0ab7731b0dd4fbe0c`
- **SHA256**: `4fadd01743312f2fdf74dd0e39ac95f0d9711e5b5ca74947c2fd9a80823a62e3`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.parkease.dto.request.ParkingZoneDto;
import com.parkease.service.AdminAnalyticsService;
import com.parkease.service.ParkingSlotService;
import com.parkease.service.ParkingZoneService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/admin")
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class AdminController {

    private final ParkingZoneService parkingZoneService;
    private final ParkingSlotService parkingSlotService;
    private final AdminAnalyticsService adminAnalyticsService;

    // Create a new parking zone
    @PostMapping("/zone")
    public ResponseEntity<?> createZone(@RequestBody ParkingZoneDto dto) {
        return ResponseEntity.ok(parkingZoneService.createParkingZone(dto));
    }

    // Get all parking zones (ADMIN)
    @GetMapping("/zones")
    public ResponseEntity<?> getAllZones() {
        return ResponseEntity.ok(parkingZoneService.getAllParkingZonesList(null));
    }

    // Get admin reports
    @GetMapping("/reports")
    public ResponseEntity<?> getReports() {
        return ResponseEntity.ok(adminAnalyticsService.getReports());
    }

    // 🔥 UPDATE ZONE
    @PutMapping("/zones/{id}")
    public ResponseEntity<?> updateZone(@PathVariable int id,
            @RequestBody ParkingZoneDto dto) {
        return ResponseEntity.ok(parkingZoneService.updateParkingZone(id, dto));
    }

    // 🔥 DELETE ZONE
    @DeleteMapping("/zones/{id}")
    public ResponseEntity<?> deleteZone(@PathVariable int id) {
        parkingZoneService.deleteParkingZone(id);
        return ResponseEntity.ok("Zone deleted successfully");
    }
}

```

---

### <a id="📄-src-main-java-com-parkease-controller-authcontroller-java"></a>📄 `src/main/java/com/parkease/controller/AuthController.java`

**File Info:**
- **Size**: 2.57 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/controller/AuthController.java`
- **Relative Path**: `src/main/java/com/parkease/controller`
- **Created**: 2026-01-26 00:29:45 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 11:37:59 (Asia/Calcutta / GMT+06:30)
- **MD5**: `e218dc2579b34eaa3640c86bfd8592dd`
- **SHA256**: `7523cd3b6015bf415c8c3edf5511b73d5d1348e0f4a7c73a7a79a235f6333619`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.parkease.dto.request.ForgotPasswordRequest;
import com.parkease.dto.request.LoginRequest;
import com.parkease.dto.request.RegisterRequest;
import com.parkease.dto.request.ResetPasswordRequest;
import com.parkease.dto.request.UpdateProfileRequest;
import com.parkease.security.CustomUserDetails;
import com.parkease.service.AuthService;
import com.parkease.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final UserService userService;

    // Register a new user
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.registerUser(request));
    }

    // Authenticate user and return JWT
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.authenticateUser(request));
    }
    
 // Add to AuthController
    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest request) {
        return ResponseEntity.ok("Password reset email sent");
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody ResetPasswordRequest request) {
        return ResponseEntity.ok("Password reset successful");
    }

    // Add to UserController
    @GetMapping("/profile")
    public ResponseEntity<?> getUserProfile(@AuthenticationPrincipal CustomUserDetails userDetails) {
        return ResponseEntity.ok(userDetails.getUser());
    }
    
    @PutMapping("/profile")
    public ResponseEntity<?> updateProfile(@RequestBody UpdateProfileRequest request,
                                           @AuthenticationPrincipal CustomUserDetails userDetails) {
        return ResponseEntity.ok(
            userService.updateProfile(userDetails.getUser().getId(), request)
        );
    }
}

```

---

### <a id="📄-src-main-java-com-parkease-controller-demopaymentcontroller-java"></a>📄 `src/main/java/com/parkease/controller/DemoPaymentController.java`

**File Info:**
- **Size**: 5.57 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/controller/DemoPaymentController.java`
- **Relative Path**: `src/main/java/com/parkease/controller`
- **Created**: 2026-01-26 00:29:45 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-27 06:55:44 (Asia/Calcutta / GMT+06:30)
- **MD5**: `bd43f406f6a66f6972973f95271db4ff`
- **SHA256**: `1244598da85a73f1e31e5cfac778cd8a4d701e7259f7004e9ce63c8990db97d5`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.controller;

import com.parkease.dto.request.PaymentRequest;
import com.parkease.service.DemoPaymentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/payment/demo-controller")
@RequiredArgsConstructor
@Slf4j
public class DemoPaymentController {

    private final DemoPaymentService demoPaymentService;

    /**
     * Create demo payment order
     */
    @PostMapping("/create-order")
    public ResponseEntity<?> createDemoOrder(@RequestBody Map<String, Object> request) {
        try {
            double amount = Double.parseDouble(request.get("amount").toString());
            String description = (String) request.getOrDefault("description", "ParkEase Booking");

            Map<String, Object> order = demoPaymentService.createDemoPaymentOrder(amount, description);
            return ResponseEntity.ok(order);
        } catch (Exception e) {
            log.error("Error creating demo order", e);
            return ResponseEntity.badRequest().body(Map.of(
                    "error", "Failed to create demo order",
                    "message", e.getMessage()));
        }
    }

    /**
     * Verify demo payment
     */
    @PostMapping("/verify")
    public ResponseEntity<?> verifyDemoPayment(@RequestBody Map<String, Object> request) {
        try {
            String orderId = (String) request.get("orderId");
            String paymentId = (String) request.get("paymentId");
            String signature = (String) request.get("signature");

            Map<String, Object> verification = demoPaymentService.verifyDemoPayment(orderId, paymentId, signature);
            return ResponseEntity.ok(verification);
        } catch (Exception e) {
            log.error("Error verifying demo payment", e);
            return ResponseEntity.badRequest().body(Map.of(
                    "error", "Payment verification failed",
                    "message", e.getMessage()));
        }
    }

    /**
     * Generate demo receipt
     */
    @GetMapping("/receipt/{paymentId}")
    public ResponseEntity<?> getDemoReceipt(@PathVariable String paymentId,
            @RequestParam(defaultValue = "100.0") double amount) {
        try {
            Map<String, Object> receipt = demoPaymentService.generateDemoReceipt(paymentId, amount);
            return ResponseEntity.ok(receipt);
        } catch (Exception e) {
            log.error("Error generating demo receipt", e);
            return ResponseEntity.badRequest().body(Map.of(
                    "error", "Failed to generate receipt",
                    "message", e.getMessage()));
        }
    }

    /**
     * Get payment status
     */
    @GetMapping("/status/{paymentId}")
    public ResponseEntity<?> getDemoPaymentStatus(@PathVariable String paymentId) {
        try {
            Map<String, Object> status = demoPaymentService.getPaymentStatus(paymentId);
            return ResponseEntity.ok(status);
        } catch (Exception e) {
            log.error("Error getting demo payment status", e);
            return ResponseEntity.badRequest().body(Map.of(
                    "error", "Failed to get payment status",
                    "message", e.getMessage()));
        }
    }

    /**
     * Get demo payment instructions
     */
    @GetMapping("/instructions")
    public ResponseEntity<?> getDemoInstructions() {
        try {
            Map<String, Object> instructions = demoPaymentService.getDemoInstructions();
            return ResponseEntity.ok(instructions);
        } catch (Exception e) {
            log.error("Error getting demo instructions", e);
            return ResponseEntity.badRequest().body(Map.of(
                    "error", "Failed to get instructions",
                    "message", e.getMessage()));
        }
    }

    /**
     * Simulate payment webhook (for testing)
     */
    @PostMapping("/webhook/simulate")
    public ResponseEntity<?> simulateWebhook(@RequestBody Map<String, Object> payload) {
        try {
            log.info("Received demo webhook payload: {}", payload);

            // Process webhook based on event type
            String event = (String) payload.getOrDefault("event", "payment.captured");
            String paymentId = (String) payload.getOrDefault("paymentId", "pay_demo_" + System.currentTimeMillis());

            Map<String, Object> response = new HashMap<>();
            response.put("status", "success");
            response.put("message", "Webhook received and processed");
            response.put("event", event);
            response.put("paymentId", paymentId);
            response.put("timestamp", System.currentTimeMillis());
            response.put("demo", true);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("Error processing demo webhook", e);
            return ResponseEntity.badRequest().body(Map.of(
                    "error", "Webhook processing failed",
                    "message", e.getMessage()));
        }
    }

    /**
     * Check if demo mode is enabled
     */
    @GetMapping("/mode")
    public ResponseEntity<?> getPaymentMode() {
        return ResponseEntity.ok(Map.of(
                "demoMode", demoPaymentService.isDemoMode(),
                "message",
                demoPaymentService.isDemoMode() ? "Application is in DEMO mode. No real payments are processed."
                        : "Application is in PRODUCTION mode.",
                "timestamp", System.currentTimeMillis()));
    }
}
```

---

### <a id="📄-src-main-java-com-parkease-controller-healthcontroller-java"></a>📄 `src/main/java/com/parkease/controller/HealthController.java`

**File Info:**
- **Size**: 1.68 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/controller/HealthController.java`
- **Relative Path**: `src/main/java/com/parkease/controller`
- **Created**: 2026-01-26 00:29:45 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 11:30:25 (Asia/Calcutta / GMT+06:30)
- **MD5**: `a11f2915d51336461d7708255f114208`
- **SHA256**: `3a533a519690f75b0afb33ef3b477b9cf46598dac502cf6efb16fe98414de47f`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.controller;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/health")
public class HealthController {
 
 private final DataSource dataSource;
 private final JdbcTemplate jdbcTemplate;
 
 @Autowired
 public HealthController(DataSource dataSource, JdbcTemplate jdbcTemplate) {
     this.dataSource = dataSource;
     this.jdbcTemplate = jdbcTemplate;
 }
 
 @GetMapping
 public ResponseEntity<Map<String, Object>> healthCheck() {
     Map<String, Object> health = new HashMap<>();
     health.put("status", "UP");
     health.put("timestamp", Instant.now());
     
     // Database health
     try {
         jdbcTemplate.execute("SELECT 1");
         health.put("database", "UP");
     } catch (Exception e) {
         health.put("database", "DOWN");
     }
     
     return ResponseEntity.ok(health);
 }
 
 @GetMapping("/metrics")
 public ResponseEntity<Map<String, Object>> metrics() {
     Map<String, Object> metrics = new HashMap<>();
     metrics.put("heapUsed", Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory());
     metrics.put("heapMax", Runtime.getRuntime().maxMemory());
     metrics.put("threadCount", Thread.activeCount());
     return ResponseEntity.ok(metrics);
 }
}
```

---

### <a id="📄-src-main-java-com-parkease-controller-parkingslotcontroller-java"></a>📄 `src/main/java/com/parkease/controller/ParkingSlotController.java`

**File Info:**
- **Size**: 1.57 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/controller/ParkingSlotController.java`
- **Relative Path**: `src/main/java/com/parkease/controller`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 07:29:29 (Asia/Calcutta / GMT+06:30)
- **MD5**: `6b54d5f5f7bbb44d4a01638c6749e93a`
- **SHA256**: `d0e2ffe8b29e36e995d6a3906473e478f9ddf7abe0316b63986a31df7da93480`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.parkease.repository.ParkingZoneRepository;
import com.parkease.service.ParkingSlotService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/admin/slots")
@RequiredArgsConstructor
public class ParkingSlotController {

    private final ParkingSlotService slotService;
    private final ParkingZoneRepository zoneRepository;

    // ADD SLOT TO ZONE
    @PostMapping("/{zoneId}")
    public ResponseEntity<?> createSlot(@PathVariable Integer zoneId) {
        return ResponseEntity.ok(slotService.createSlot(zoneId));
    }

    // GET ALL SLOTS OF ZONE
    @GetMapping("/{zoneId}")
    public ResponseEntity<?> getSlots(@PathVariable Integer zoneId) {
        return ResponseEntity.ok(slotService.getSlotsByZone(zoneId));
    }

    // UPDATE SLOT STATUS
    @PutMapping("/{slotId}/status")
    public ResponseEntity<?> updateStatus(@PathVariable Integer slotId,
                                          @RequestParam String status) {
        return ResponseEntity.ok(slotService.updateSlotStatus(slotId, status));
    }
}

```

---

### <a id="📄-src-main-java-com-parkease-controller-paymentcontroller-java"></a>📄 `src/main/java/com/parkease/controller/PaymentController.java`

**File Info:**
- **Size**: 6.63 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/controller/PaymentController.java`
- **Relative Path**: `src/main/java/com/parkease/controller`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 10:41:33 (Asia/Calcutta / GMT+06:30)
- **MD5**: `ca31a7e5b895381797dea296fb5b4c72`
- **SHA256**: `3b0a2b9495299f3e1ddaca1c1bb3e19b0df1b591035f3372a1415cdc30296e5a`
- **Encoding**: ASCII

**File code content:**

```java
// Update your existing PaymentController.java
package com.parkease.controller;

import com.parkease.dto.request.PaymentRequest;
import com.parkease.service.DemoPaymentService;
import com.parkease.service.PaymentService;
import com.parkease.service.ReservationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/payment")
@RequiredArgsConstructor
@Slf4j
public class PaymentController {

    private final PaymentService paymentService;
    private final ReservationService reservationService;
    private final DemoPaymentService demoPaymentService;

    // Initiate a payment (existing with demo support)
    @PostMapping("/initiate")
    public ResponseEntity<?> initiatePayment(@RequestBody PaymentRequest request) {
        if (demoPaymentService.isDemoMode()) {
            log.info("DEMO MODE: Initiating demo payment for reservation: {}", request.reservationId());
            
            Map<String, Object> demoResponse = new HashMap<>();
            demoResponse.put("mode", "DEMO");
            demoResponse.put("reservationId", request.reservationId());
            demoResponse.put("amount", request.amount());
            demoResponse.put("message", "Demo payment initiated - use test card: 4111 1111 1111 1111");
            demoResponse.put("instructions", demoPaymentService.getDemoInstructions());
            
            return ResponseEntity.ok(demoResponse);
        }
        
        return ResponseEntity.ok(paymentService.initiatePayment(request));
    }

    // Demo payment to confirm reservation and return receipt
    @PostMapping("/demo")
    public ResponseEntity<?> demoPayment(@RequestBody PaymentRequest request) {
        log.info("Processing demo payment for reservation: {}", request.reservationId());
        
        String mode = request.paymentMode() != null ? request.paymentMode() : "ONLINE_DEMO";
        
        // Create demo payment record
        Map<String, Object> demoPayment = demoPaymentService.createDemoPaymentOrder(
            request.amount(), 
            "ParkEase Reservation #" + request.reservationId()
        );
        
        // Verify demo payment
        Map<String, Object> verification = demoPaymentService.verifyDemoPayment(
            (String) demoPayment.get("id"),
            "pay_demo_" + System.currentTimeMillis(),
            "demo_signature_" + request.reservationId()
        );
        
        boolean success = (boolean) verification.getOrDefault("success", true);
        
        if (success) {
            // Confirm reservation
            return ResponseEntity.ok(
                reservationService.confirmPayment(
                    request.reservationId(), 
                    request.amount(), 
                    mode + "_DEMO"
                )
            );
        } else {
            return ResponseEntity.badRequest().body(Map.of(
                "error", "Demo payment failed",
                "message", "Simulated payment failure for testing",
                "demo", true,
                "reservationId", request.reservationId()
            ));
        }
    }

    // Handle payment webhook (updated for demo)
    @PostMapping("/webhook")
    public ResponseEntity<?> webhook(@RequestBody String payload) {
        if (demoPaymentService.isDemoMode()) {
            log.info("DEMO MODE: Processing webhook");
            return ResponseEntity.ok(Map.of(
                "status", "success",
                "message", "Demo webhook processed",
                "demo", true
            ));
        }
        
        paymentService.verifyWebhookSignature(payload);
        return ResponseEntity.ok("Webhook received");
    }

    // New endpoint for demo payment simulation
    @PostMapping("/simulate")
    public ResponseEntity<?> simulatePayment(@RequestBody Map<String, Object> simulation) {
        log.info("Payment simulation requested: {}", simulation);
        
        String scenario = (String) simulation.getOrDefault("scenario", "success");
        double amount = Double.parseDouble(simulation.getOrDefault("amount", "100.0").toString());
        
        Map<String, Object> response = new HashMap<>();
        response.put("simulation", true);
        response.put("scenario", scenario);
        response.put("amount", amount);
        response.put("timestamp", System.currentTimeMillis());
        
        switch (scenario.toLowerCase()) {
            case "success":
                response.put("status", "paid");
                response.put("message", "Payment simulation successful");
                response.put("transactionId", "txn_demo_success_" + System.currentTimeMillis());
                break;
            case "failure":
                response.put("status", "failed");
                response.put("message", "Payment simulation failed (insufficient funds)");
                response.put("errorCode", "card_declined");
                break;
            case "pending":
                response.put("status", "pending");
                response.put("message", "Payment simulation pending (awaiting authentication)");
                response.put("authenticationUrl", "https://demo.parkease.com/auth/3d-secure");
                break;
            default:
                response.put("status", "unknown");
                response.put("message", "Unknown simulation scenario");
        }
        
        return ResponseEntity.ok(response);
    }

    // Check payment status (with demo support)
    @GetMapping("/status/{reservationId}")
    public ResponseEntity<?> getPaymentStatus(@PathVariable Long reservationId) {
        if (demoPaymentService.isDemoMode()) {
            Map<String, Object> demoStatus = new HashMap<>();
            demoStatus.put("reservationId", reservationId);
            demoStatus.put("status", "paid");
            demoStatus.put("amount", 100.0);
            demoStatus.put("currency", "INR");
            demoStatus.put("paidAt", System.currentTimeMillis());
            demoStatus.put("demo", true);
            demoStatus.put("note", "Demo payment status - no real transaction");
            
            return ResponseEntity.ok(demoStatus);
        }
        
        // TODO: Implement real payment status check
        return ResponseEntity.ok(Map.of(
            "reservationId", reservationId,
            "status", "unavailable",
            "message", "Real payment status check not implemented"
        ));
    }
}
```

---

### <a id="📄-src-main-java-com-parkease-controller-pricingcontroller-java"></a>📄 `src/main/java/com/parkease/controller/PricingController.java`

**File Info:**
- **Size**: 1.11 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/controller/PricingController.java`
- **Relative Path**: `src/main/java/com/parkease/controller`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-22 12:40:44 (Asia/Calcutta / GMT+06:30)
- **MD5**: `c74634f4f562bc38bc0b146edc3a16c6`
- **SHA256**: `d2a4e1c9a130263624102a73fb10d294a97e626c393c4ee2e08c77d28e60f38f`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.parkease.entity.BasePrice;
import com.parkease.repository.BasePriceRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/admin/pricing")
@RequiredArgsConstructor
public class PricingController {

    private final BasePriceRepository basePriceRepository;

    // GET ALL PRICES
    @GetMapping
    public ResponseEntity<List<BasePrice>> getAllPrices() {
        return ResponseEntity.ok(basePriceRepository.findAll());
    }

    // UPDATE PRICE
    @PutMapping("/{id}")
    public ResponseEntity<BasePrice> updatePrice(@PathVariable Long id,
                                                 @RequestBody BasePrice updated) {

        BasePrice price = basePriceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Price not found"));

        price.setPricePerHour(updated.getPricePerHour());

        return ResponseEntity.ok(basePriceRepository.save(price));
    }
}

```

---

### <a id="📄-src-main-java-com-parkease-controller-testcontroller-java"></a>📄 `src/main/java/com/parkease/controller/TestController.java`

**File Info:**
- **Size**: 1.42 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/controller/TestController.java`
- **Relative Path**: `src/main/java/com/parkease/controller`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 12:37:13 (Asia/Calcutta / GMT+06:30)
- **MD5**: `98b72c5b9ff8e41aab8c54c0da1e4554`
- **SHA256**: `0e83034c53f7952428b6d55775ad2585ee683f501e8e43b37bdb7d53e48b16ea`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/test")
@CrossOrigin(origins = "http://localhost:5173") // Direct annotation
public class TestController {

    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> health() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "UP");
        response.put("service", "ParkEase Backend");
        response.put("timestamp", java.time.LocalDateTime.now().toString());
        return ResponseEntity.ok(response);
    }

    @PostMapping("/echo")
    public ResponseEntity<Map<String, Object>> echo(@RequestBody Map<String, Object> request) {
        Map<String, Object> response = new HashMap<>(request);
        response.put("received", true);
        response.put("timestamp", java.time.LocalDateTime.now().toString());
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/cors-test")
    public ResponseEntity<Map<String, String>> corsTest() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "CORS is working!");
        response.put("frontend", "http://localhost:5173");
        response.put("backend", "http://localhost:8080");
        return ResponseEntity.ok(response);
    }
}
```

---

### <a id="📄-src-main-java-com-parkease-controller-usercontroller-java"></a>📄 `src/main/java/com/parkease/controller/UserController.java`

**File Info:**
- **Size**: 5.64 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/controller/UserController.java`
- **Relative Path**: `src/main/java/com/parkease/controller`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-27 11:49:20 (Asia/Calcutta / GMT+06:30)
- **MD5**: `86432251e19c05d2e4b6c98c019defc0`
- **SHA256**: `91382592c9a52ff78280b3b2e2d7a4826cdca1ee0130d11aa720ae79861e8c0d`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.parkease.dto.request.ReservationRequest;
import com.parkease.security.CustomUserDetails;
import com.parkease.service.ParkingSlotService;
import com.parkease.service.ReservationService;
import com.parkease.service.ParkingZoneService;
import com.parkease.service.PricingService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

        private final ReservationService reservationService;
        private final ParkingSlotService parkingSlotService;
        private final ParkingZoneService parkingZoneService;
        private final PricingService pricingService;

        // -------------------------------
        // GET AVAILABLE SLOTS
        // -------------------------------
        @GetMapping("/slots")
        public ResponseEntity<?> getAvailableSlots(@RequestParam Integer zoneId) {
                return ResponseEntity.ok(parkingSlotService.getAvailableSlots(zoneId));
        }
        // -------------------------------
        // LIST PARKING ZONES
        // -------------------------------
        @GetMapping("/zones")
        public ResponseEntity<?> getZones(@RequestParam(required = false) String location) {
                return ResponseEntity.ok(parkingZoneService.getAllParkingZonesList(location));
        }
        // -------------------------------
        // GET ZONE BY ID
        // -------------------------------
        @GetMapping("/zones/{id}")
        public ResponseEntity<?> getZoneById(@PathVariable int id) {
                return ResponseEntity.ok(parkingZoneService.getParkingZoneById(id));
        }
        // -------------------------------
        // GET SLOTS BY ZONE NAME
        // -------------------------------
        @GetMapping("/zones/{name}/slots")
        public ResponseEntity<?> getSlotsByZoneName(@PathVariable String name) {
                var zone = parkingZoneService.getByName(name);
                return ResponseEntity.ok(parkingSlotService.getAvailableSlots(zone.getId()));
        }
        // -------------------------------
        // CREATE RESERVATION
        // -------------------------------
        @PostMapping("/reserve")
        public ResponseEntity<?> reserveSlot(
                        @RequestBody ReservationRequest request,
                        @AuthenticationPrincipal CustomUserDetails userDetails) {

                var user = userDetails.getUser();

                var reservation = reservationService.createReservation(
                                request.getSlotId(),
                                request.getStartTime(),
                                request.getEndTime(),
                                request.getVehicleType(),
                                request.getVehicleNumber(),
                                user);

                return ResponseEntity.ok(reservation);
        }

        // -------------------------------
        // CANCEL RESERVATION
        // -------------------------------
        @DeleteMapping("/cancel/{id}")
        public ResponseEntity<?> cancel(
                        @PathVariable Integer id,
                        @AuthenticationPrincipal CustomUserDetails user) {

                return ResponseEntity.ok(
                                reservationService.cancelReservation(
                                                id,
                                                user.getUser().getId()));
        }

        // -------------------------------
        // OLD HISTORY API (KEEP IT WORKING)
        // -------------------------------
        @GetMapping("/history")
        public ResponseEntity<?> getHistory(
                        @AuthenticationPrincipal CustomUserDetails user) {

                return ResponseEntity.ok(
                                reservationService.getReservationsByUser(
                                                user.getUser().getId()));
        }

        // -------------------------------
        // 🔥 NEW API FOR FRONTEND
        // -------------------------------
        @GetMapping("/reservations")
        public ResponseEntity<?> getMyReservations(
                        @AuthenticationPrincipal CustomUserDetails userDetails) {

                return ResponseEntity.ok(
                                reservationService.getReservationsByUser(
                                                userDetails.getUser().getId()));
        }

        // -------------------------------
        // CALCULATE PRICE
        // -------------------------------
        @GetMapping("/price")
        public ResponseEntity<?> calculatePrice(
                        @RequestParam String vehicleType,
                        @RequestParam int hours) {

                var type = com.parkease.enums.VehicleType.valueOf(vehicleType);
                double amount = pricingService.calculatePriceByHours(type, hours);

                return ResponseEntity.ok(amount);
        }
}

```

---

### <a id="📄-src-main-java-com-parkease-controller-websocketcontroller-java"></a>📄 `src/main/java/com/parkease/controller/WebSocketController.java`

**File Info:**
- **Size**: 947 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/controller/WebSocketController.java`
- **Relative Path**: `src/main/java/com/parkease/controller`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 11:41:08 (Asia/Calcutta / GMT+06:30)
- **MD5**: `4713411384b5faa999c42d25b8213ffb`
- **SHA256**: `afb79af8340cc46043ee3ef509477cb81d6eb3f07d1713bf5825f18fe0a86214`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.controller;


import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.parkease.dto.websocket.ReservationUpdate;
import com.parkease.dto.websocket.SlotStatusUpdate;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class WebSocketController {
    
    private final SimpMessagingTemplate messagingTemplate;
    
    @MessageMapping("/reservation.update")
    public void sendReservationUpdate(ReservationUpdate update) {
        messagingTemplate.convertAndSend("/topic/reservations/" + update.getUserId(), update);
    }
    
    @MessageMapping("/slot.status")
    public void sendSlotStatusUpdate(SlotStatusUpdate update) {
        messagingTemplate.convertAndSend("/topic/slots/" + update.getZoneId(), update);
    }
}
```

---

### <a id="📄-src-main-java-com-parkease-dto-request-forgotpasswordrequest-java"></a>📄 `src/main/java/com/parkease/dto/request/ForgotPasswordRequest.java`

**File Info:**
- **Size**: 242 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/dto/request/ForgotPasswordRequest.java`
- **Relative Path**: `src/main/java/com/parkease/dto/request`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 11:33:01 (Asia/Calcutta / GMT+06:30)
- **MD5**: `7c3467066f4aaa53c50e73860e14561a`
- **SHA256**: `49a3e044b707f3bc55748928c2d5e7a3424b7b5bf4bac75ebc987741489e6f15`
- **Encoding**: ASCII

**File code content:**

```java
// ForgotPasswordRequest.java
package com.parkease.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record ForgotPasswordRequest(
    @Email @NotBlank String email
) {}
```

---

### <a id="📄-src-main-java-com-parkease-dto-request-loginrequest-java"></a>📄 `src/main/java/com/parkease/dto/request/LoginRequest.java`

**File Info:**
- **Size**: 224 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/dto/request/LoginRequest.java`
- **Relative Path**: `src/main/java/com/parkease/dto/request`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-18 19:52:25 (Asia/Calcutta / GMT+06:30)
- **MD5**: `e967b6c9813764014b833fc47f9ec84b`
- **SHA256**: `bee210b3230dad1b23e5eceeafbbbd6f3da85f2ce281951b311fcf8d2840e624`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record LoginRequest(
    @Email String email,
    @NotBlank String password
) {}
```

---

### <a id="📄-src-main-java-com-parkease-dto-request-parkingzonedto-java"></a>📄 `src/main/java/com/parkease/dto/request/ParkingZoneDto.java`

**File Info:**
- **Size**: 550 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/dto/request/ParkingZoneDto.java`
- **Relative Path**: `src/main/java/com/parkease/dto/request`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-18 20:35:52 (Asia/Calcutta / GMT+06:30)
- **MD5**: `979fefe842393a2d046f5be4b042c150`
- **SHA256**: `0e4715266a50f4435abba565eb826c0ac135242b6c8cb406fa9a468f5310bde1`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record ParkingZoneDto(

        Integer id,

        @NotBlank(message = "name can not be empty")
        String name,

        @NotNull(message = "location field is required")
        String location,

        boolean isActive,

        @Positive(message = "capacity of the parking zone should be positive value")
        Integer capacity
) {}
```

---

### <a id="📄-src-main-java-com-parkease-dto-request-paymentrequest-java"></a>📄 `src/main/java/com/parkease/dto/request/PaymentRequest.java`

**File Info:**
- **Size**: 262 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/dto/request/PaymentRequest.java`
- **Relative Path**: `src/main/java/com/parkease/dto/request`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 07:35:35 (Asia/Calcutta / GMT+06:30)
- **MD5**: `e803e0b8d9ec80e739ad778b34e604d5`
- **SHA256**: `3c16c24e8ce66c02fd41e0c3b0fe71e40501236f84004c429f438f569ea28486`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.dto.request;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record PaymentRequest(
    @NotNull Integer reservationId,
    @Positive double amount,
    String paymentMode
) {}
```

---

### <a id="📄-src-main-java-com-parkease-dto-request-registerrequest-java"></a>📄 `src/main/java/com/parkease/dto/request/RegisterRequest.java`

**File Info:**
- **Size**: 344 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/dto/request/RegisterRequest.java`
- **Relative Path**: `src/main/java/com/parkease/dto/request`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-18 19:52:04 (Asia/Calcutta / GMT+06:30)
- **MD5**: `3e887338ffa9053acb735a958d4a1ef3`
- **SHA256**: `ae57d591497ea1b2f874bfa1b2694c4c8c457174b8a271add424b4c337497093`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record RegisterRequest(
    @NotBlank String name,
    @Email String email,
    @NotBlank @Size(min = 6) String password,
    @NotBlank String phone
) {}
```

---

### <a id="📄-src-main-java-com-parkease-dto-request-reservationrequest-java"></a>📄 `src/main/java/com/parkease/dto/request/ReservationRequest.java`

**File Info:**
- **Size**: 384 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/dto/request/ReservationRequest.java`
- **Relative Path**: `src/main/java/com/parkease/dto/request`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-27 06:32:35 (Asia/Calcutta / GMT+06:30)
- **MD5**: `1d3ad2e840b6f05dd04ccc99e03b6921`
- **SHA256**: `9d83101e5a7a1da4f959130040246acd40bf7d2ac52f10437437a590e768b078`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.dto.request;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ReservationRequest {

    private Integer slotId;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private String vehicleType;
    private String vehicleNumber;
}

```

---

### <a id="📄-src-main-java-com-parkease-dto-request-resetpasswordrequest-java"></a>📄 `src/main/java/com/parkease/dto/request/ResetPasswordRequest.java`

**File Info:**
- **Size**: 282 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/dto/request/ResetPasswordRequest.java`
- **Relative Path**: `src/main/java/com/parkease/dto/request`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 11:33:24 (Asia/Calcutta / GMT+06:30)
- **MD5**: `85eb1b3f922c132f4f2fc94ffe5a6ea5`
- **SHA256**: `70e38a3fa436036461d4366e601ffde8e61379038aa4edbc78eee58e3a43ac45`
- **Encoding**: ASCII

**File code content:**

```java
// ResetPasswordRequest.java
package com.parkease.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ResetPasswordRequest(
    @NotBlank String token,
    @NotBlank @Size(min = 6) String newPassword
) {}
```

---

### <a id="📄-src-main-java-com-parkease-dto-request-slotdto-java"></a>📄 `src/main/java/com/parkease/dto/request/SlotDto.java`

**File Info:**
- **Size**: 231 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/dto/request/SlotDto.java`
- **Relative Path**: `src/main/java/com/parkease/dto/request`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-18 20:45:49 (Asia/Calcutta / GMT+06:30)
- **MD5**: `61574441c7da7c78eee6d657ab54d7d0`
- **SHA256**: `f45a82b4a256f04a0bd817521dbdd62e985652776558340a046edd9392e0c378`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record SlotDto(
    @NotBlank String slotNumber,
    @NotNull Long parkingZoneId
) {}
```

---

### <a id="📄-src-main-java-com-parkease-dto-request-updateprofilerequest-java"></a>📄 `src/main/java/com/parkease/dto/request/UpdateProfileRequest.java`

**File Info:**
- **Size**: 144 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/dto/request/UpdateProfileRequest.java`
- **Relative Path**: `src/main/java/com/parkease/dto/request`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 11:33:48 (Asia/Calcutta / GMT+06:30)
- **MD5**: `f5be8f4921163bcc2d6ba35e7272aaa6`
- **SHA256**: `4eac98a3b6c294f89722ac537177b5776b8ed603721157c8640ccd360aadf6f1`
- **Encoding**: ASCII

**File code content:**

```java
// UpdateProfileRequest.java
package com.parkease.dto.request;

public record UpdateProfileRequest(
    String name,
    String phone
) {}
```

---

### <a id="📄-src-main-java-com-parkease-dto-request-vehicledto-java"></a>📄 `src/main/java/com/parkease/dto/request/VehicleDto.java`

**File Info:**
- **Size**: 365 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/dto/request/VehicleDto.java`
- **Relative Path**: `src/main/java/com/parkease/dto/request`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-18 20:45:36 (Asia/Calcutta / GMT+06:30)
- **MD5**: `4d1a8c962272ea7bf46f43666a474aef`
- **SHA256**: `24941e0532f40414f20cda96cc70ef389f2578c5024cdd52c150e1e914d5853d`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;

public record VehicleDto(
    @NotBlank String plateNumber,
    @NotBlank String modelName,
    @Positive int modelYear,
    @Positive double vehicleWidth,
    @Positive double vehicleDepth,
    @NotBlank String type
) {}
```

---

### <a id="📄-src-main-java-com-parkease-dto-response-adminstatsresponse-java"></a>📄 `src/main/java/com/parkease/dto/response/AdminStatsResponse.java`

**File Info:**
- **Size**: 500 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/dto/response/AdminStatsResponse.java`
- **Relative Path**: `src/main/java/com/parkease/dto/response`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-22 11:29:50 (Asia/Calcutta / GMT+06:30)
- **MD5**: `0e8f6b796f30698c6b7c5a0e139fa7d8`
- **SHA256**: `47d3cd769dae3e2f1d02ca0756e0071cc8cd26e387f4211a4d57df1f2dd1af0b`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.dto.response;

import java.util.List;
import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdminStatsResponse {

    private double totalRevenue;
    private long activeReservations;
    private long totalUsers;
    private double occupancyRate;
    private List<Map<String, Object>> weeklyPeakHours;

}
```

---

### <a id="📄-src-main-java-com-parkease-dto-response-loginresponse-java"></a>📄 `src/main/java/com/parkease/dto/response/LoginResponse.java`

**File Info:**
- **Size**: 163 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/dto/response/LoginResponse.java`
- **Relative Path**: `src/main/java/com/parkease/dto/response`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-22 10:49:07 (Asia/Calcutta / GMT+06:30)
- **MD5**: `89c5e55c1ff87458e91c6454e0dedf47`
- **SHA256**: `eb389a6ef9f0c350ac0c36063021ec195d0fec81f140b5f30616c923311ddb13`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.dto.response;

public record LoginResponse(
        String token,
        String role,
        String email,
        String name
) {}

```

---

### <a id="📄-src-main-java-com-parkease-dto-response-parkingzoneresponsedto-java"></a>📄 `src/main/java/com/parkease/dto/response/ParkingZoneResponseDto.java`

**File Info:**
- **Size**: 175 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/dto/response/ParkingZoneResponseDto.java`
- **Relative Path**: `src/main/java/com/parkease/dto/response`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-18 20:22:18 (Asia/Calcutta / GMT+06:30)
- **MD5**: `8616d50ac3d1a979f3fb8fa22f4eb61d`
- **SHA256**: `9489b5b64c4fcef6ee910569082b972e424c36a8c70b78167c633cdde2c8035c`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.dto.response;

public record ParkingZoneResponseDto(
    int id,
    String name,
    String location,
    boolean isActive,
    int capacity
) {}
```

---

### <a id="📄-src-main-java-com-parkease-dto-response-registeruserresponsedto-java"></a>📄 `src/main/java/com/parkease/dto/response/RegisterUserResponseDto.java`

**File Info:**
- **Size**: 233 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/dto/response/RegisterUserResponseDto.java`
- **Relative Path**: `src/main/java/com/parkease/dto/response`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-18 20:22:09 (Asia/Calcutta / GMT+06:30)
- **MD5**: `95e233ad063d0c9a345afde28fe77fcd`
- **SHA256**: `8779b509e3ffaea99aae07ea7ac39778d5b24c6dc028712c8fc705883041f071`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.dto.response;

import java.util.List;
import com.parkease.entity.Role;

public record RegisterUserResponseDto(
    int id,
    String name,
    String email,
    String phone,
    List<Role> roles
) {}
```

---

### <a id="📄-src-main-java-com-parkease-dto-response-reservationresponsedto-java"></a>📄 `src/main/java/com/parkease/dto/response/ReservationResponseDto.java`

**File Info:**
- **Size**: 612 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/dto/response/ReservationResponseDto.java`
- **Relative Path**: `src/main/java/com/parkease/dto/response`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 07:37:02 (Asia/Calcutta / GMT+06:30)
- **MD5**: `4b6037d569553c955e55f98c09f658e1`
- **SHA256**: `dd901072b6bbe360f929c2eff2d47c6dda7ff5ac1c9a6507924482da7fcb7988`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.dto.response;


import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter
@Setter
public class ReservationResponseDto {

    private Integer id;                  // booking id
    private Integer slotId;
    private String slotNumber;
    private Integer parkingZoneId;
    private String zoneName;

    private String vehicleType;
    private String vehicleNumber;

    private LocalDateTime startTime;
    private LocalDateTime endTime;

    private String status;
    private double amount;

    private String paymentMode;
    private String transactionId;

}

```

---

### <a id="📄-src-main-java-com-parkease-dto-response-slotresponsedto-java"></a>📄 `src/main/java/com/parkease/dto/response/SlotResponseDto.java`

**File Info:**
- **Size**: 226 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/dto/response/SlotResponseDto.java`
- **Relative Path**: `src/main/java/com/parkease/dto/response`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 07:36:16 (Asia/Calcutta / GMT+06:30)
- **MD5**: `0e96ebdd16cc3a973a4825fdf03ac78a`
- **SHA256**: `0df89365c85cbc7a1306a8b275ca646299e36de2cec0dd4c92e6dab46e8f31e1`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SlotResponseDto {

    private Integer id;
    private String slotNumber;
    private String status;

}
```

---

### <a id="📄-src-main-java-com-parkease-dto-response-userresponsedto-java"></a>📄 `src/main/java/com/parkease/dto/response/UserResponseDto.java`

**File Info:**
- **Size**: 193 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/dto/response/UserResponseDto.java`
- **Relative Path**: `src/main/java/com/parkease/dto/response`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-18 20:45:24 (Asia/Calcutta / GMT+06:30)
- **MD5**: `a017cef6de0e2dd683d7615fc77fce69`
- **SHA256**: `8d604531e682c2a64e5bbef3a2657d2a2c11a15555376bacbf8370dbd460c816`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.dto.response;

import java.util.List;

public record UserResponseDto(
    int id,
    String name,
    String email,
    String phone,
    List<String> roles
) {}
```

---

### <a id="📄-src-main-java-com-parkease-dto-response-vehicleresponsedto-java"></a>📄 `src/main/java/com/parkease/dto/response/VehicleResponseDto.java`

**File Info:**
- **Size**: 228 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/dto/response/VehicleResponseDto.java`
- **Relative Path**: `src/main/java/com/parkease/dto/response`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-18 20:45:44 (Asia/Calcutta / GMT+06:30)
- **MD5**: `744fc541427b5fcb0a1cd02537552eb7`
- **SHA256**: `71a9e41917728b32e3f0a4fb4fd8598061453cd51a6eb06b3daedf903431744c`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.dto.response;

public record VehicleResponseDto(
    Long id,
    String plateNumber,
    String modelName,
    int modelYear,
    double vehicleWidth,
    double vehicleDepth,
    String type
) {}
```

---

### <a id="📄-src-main-java-com-parkease-dto-websocket-reservationupdate-java"></a>📄 `src/main/java/com/parkease/dto/websocket/ReservationUpdate.java`

**File Info:**
- **Size**: 437 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/dto/websocket/ReservationUpdate.java`
- **Relative Path**: `src/main/java/com/parkease/dto/websocket`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 11:40:22 (Asia/Calcutta / GMT+06:30)
- **MD5**: `4c06fd19f4c27d39feaaa0f6f5d45d3c`
- **SHA256**: `5f587e7049ea45f50b92d70d9c244ca8255802f251911dd986cf32d0455d451c`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.dto.websocket;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReservationUpdate {
    private Integer userId;
    private Integer reservationId;
    private String status;
    private String message;
    private String updateType; // CREATED, UPDATED, CANCELLED, EXPIRED
    private Long timestamp;
}
```

---

### <a id="📄-src-main-java-com-parkease-dto-websocket-slotstatusupdate-java"></a>📄 `src/main/java/com/parkease/dto/websocket/SlotStatusUpdate.java`

**File Info:**
- **Size**: 458 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/dto/websocket/SlotStatusUpdate.java`
- **Relative Path**: `src/main/java/com/parkease/dto/websocket`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 11:40:54 (Asia/Calcutta / GMT+06:30)
- **MD5**: `511937b46a6554c881c8a8c0b0804059`
- **SHA256**: `63e407f4b900cf8ce10d6ada31f3161bc123c5c43898a27db53885e2dffe4fd4`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.dto.websocket;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SlotStatusUpdate {
    private Integer zoneId;
    private Integer slotId;
    private String slotNumber;
    private String status; // AVAILABLE, RESERVED, OCCUPIED
    private String updateType; // STATUS_CHANGE, ADDED, REMOVED
    private Long timestamp;
}
```

---

### <a id="📄-src-main-java-com-parkease-dto-adminstatsresponse-java"></a>📄 `src/main/java/com/parkease/dto/AdminStatsResponse.java`

**File Info:**
- **Size**: 261 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/dto/AdminStatsResponse.java`
- **Relative Path**: `src/main/java/com/parkease/dto`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-20 19:48:32 (Asia/Calcutta / GMT+06:30)
- **MD5**: `f17d0f12b0e010f552196cd81baee118`
- **SHA256**: `3c6ee4071ca6a1ed0bda23c0c20b35d675c84613c8e3df1591a7ab7923aa312b`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class AdminStatsResponse {

    private long totalReservations;
    private double occupancyRate;
}

```

---

### <a id="📄-src-main-java-com-parkease-entity-baseprice-java"></a>📄 `src/main/java/com/parkease/entity/BasePrice.java`

**File Info:**
- **Size**: 516 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/entity/BasePrice.java`
- **Relative Path**: `src/main/java/com/parkease/entity`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-22 12:42:32 (Asia/Calcutta / GMT+06:30)
- **MD5**: `7749701420eca9af982bc203b3c4d62b`
- **SHA256**: `d036f3fec81061ae4813adff6b0eebb99057573cbb3644135da8e1253fdee7a5`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.entity;


import com.parkease.enums.VehicleType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "base_prices")
public class BasePrice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(unique = true, nullable = false)
    private VehicleType vehicleType;

    @Column(nullable = false)
    private double pricePerHour;
}

```

---

### <a id="📄-src-main-java-com-parkease-entity-parkingslot-java"></a>📄 `src/main/java/com/parkease/entity/ParkingSlot.java`

**File Info:**
- **Size**: 953 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/entity/ParkingSlot.java`
- **Relative Path**: `src/main/java/com/parkease/entity`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 11:22:27 (Asia/Calcutta / GMT+06:30)
- **MD5**: `36a591129da4bfa39a6ea1488a27267c`
- **SHA256**: `746d092b8d2df3f6dec42ba784335c09fd8e8e62625212dad47d5ea2bb7e84f0`
- **Encoding**: UTF-8

**File code content:**

```java
package com.parkease.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "parking_slots")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class ParkingSlot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String slotNumber;

    // ✅ Rename zone → parkingZone (for mapper & service consistency)
    @ManyToOne
    @JoinColumn(name = "zone_id", nullable = false)
    private ParkingZone parkingZone;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SlotStatus status;

    @Column(name = "qrcode_path")
    private String qrCodePath;

    // ✅ Must include OCCUPIED
    public enum SlotStatus {
        AVAILABLE,
        RESERVED,
        OCCUPIED
    }
}

```

---

### <a id="📄-src-main-java-com-parkease-entity-parkingzone-java"></a>📄 `src/main/java/com/parkease/entity/ParkingZone.java`

**File Info:**
- **Size**: 842 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/entity/ParkingZone.java`
- **Relative Path**: `src/main/java/com/parkease/entity`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 07:26:36 (Asia/Calcutta / GMT+06:30)
- **MD5**: `d3ab14e96299d43d8b9c38895f6cc68d`
- **SHA256**: `3e604f68289e796e468790323b020473362217b43c3e43dd728986c7a91d568d`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "parking_zones")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ParkingZone {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String location;

    @Column(nullable = false)
    private int totalSlots;

    @Column(nullable = false)
    private boolean active;
}
```

---

### <a id="📄-src-main-java-com-parkease-entity-paymenttransaction-java"></a>📄 `src/main/java/com/parkease/entity/PaymentTransaction.java`

**File Info:**
- **Size**: 1.02 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/entity/PaymentTransaction.java`
- **Relative Path**: `src/main/java/com/parkease/entity`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 07:26:36 (Asia/Calcutta / GMT+06:30)
- **MD5**: `15c14d28d6f661581ff7892dcdeaeec5`
- **SHA256**: `4c6ee2c439c6e95de8be3a48eb52baa24ebdaa6cd0dca89ac71af7a04e28c5e2`
- **Encoding**: UTF-8

**File code content:**

```java
package com.parkease.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "payment_transactions")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentTransaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
    @JoinColumn(name = "reservation_id", nullable = false)
    private Reservation reservation;

    @Column(nullable = false)
    private double amount;

    @Column(nullable = false)
    private String paymentMode;   // ONLINE_DEMO / QR_CODE

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PaymentStatus status;

    @Column(nullable = false)
    private LocalDateTime transactionTime;

    // ✅ INNER ENUM — remove external PaymentStatus completely
    public enum PaymentStatus {
        SUCCESS,
        FAILED
    }
}

```

---

### <a id="📄-src-main-java-com-parkease-entity-reservation-java"></a>📄 `src/main/java/com/parkease/entity/Reservation.java`

**File Info:**
- **Size**: 1.88 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/entity/Reservation.java`
- **Relative Path**: `src/main/java/com/parkease/entity`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-25 12:11:50 (Asia/Calcutta / GMT+06:30)
- **MD5**: `866e80ef8aa9576b353040201ec0687c`
- **SHA256**: `15b86052b086478e222830bde185aafe5efd754af07a041afec97ffbee2f7272`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(
	    name = "reservations",
	    indexes = {
	        @Index(name = "idx_res_status", columnList = "status"),
	        @Index(name = "idx_res_start", columnList = "startTime"),
	        @Index(name = "idx_res_user", columnList = "user_id")
	    }
	)

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    // USER who booked
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // SLOT booked
    @ManyToOne
    @JoinColumn(name = "slot_id", nullable = false)
    private ParkingSlot slot;

    @Column(nullable = false)
    private LocalDateTime startTime;

    @Column(nullable = false)
    private LocalDateTime endTime;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ReservationStatus status;

    // VEHICLE details (separate entity as per design)
    @OneToOne(mappedBy = "reservation", cascade = CascadeType.ALL)
    private Vehicle vehicle;

    // PAYMENT transaction (receipt backbone)
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "payment_tx_id")
    private PaymentTransaction paymentTransaction;

    // TOTAL AMOUNT
    @Column(nullable = false)
    private Double amount;

    @Column(nullable = false, updatable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;

    public enum ReservationStatus {
        PENDING,
        CONFIRMED,
        CANCELLED,
        EXPIRED
    }
}

```

---

### <a id="📄-src-main-java-com-parkease-entity-role-java"></a>📄 `src/main/java/com/parkease/entity/Role.java`

**File Info:**
- **Size**: 695 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/entity/Role.java`
- **Relative Path**: `src/main/java/com/parkease/entity`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 07:26:34 (Asia/Calcutta / GMT+06:30)
- **MD5**: `c3023232263db2b2f852519b0a2ffa0d`
- **SHA256**: `98bb50309acaf76218eba93b1fc6385f13ca3b9b96332040f8d5ca028fbfb637`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "roles")
@Setter
@Getter
@NoArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
   
    @Column(nullable = false, unique = true)
    private String name; // ROLE_USER, ROLE_ADMIN

    public Role(String name) {
        this.name = name;
    }
}
```

---

### <a id="📄-src-main-java-com-parkease-entity-user-java"></a>📄 `src/main/java/com/parkease/entity/User.java`

**File Info:**
- **Size**: 2.15 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/entity/User.java`
- **Relative Path**: `src/main/java/com/parkease/entity`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 07:26:34 (Asia/Calcutta / GMT+06:30)
- **MD5**: `7afb1b16bca5b486ea3d557cc8d8baf1`
- **SHA256**: `1df7b826c7d0b209cce5bb0dcb490d33768c8e250851d88b278b31c79db41b16`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private String name;
    
    @Column(unique = true, nullable = false)
    private String email;
   
    @Column(nullable = false)
    private String password;
  
    @Column(unique = true, nullable = false)
    private String phone;
   
    @Column(name = "is_verified", columnDefinition ="boolean default false")
    private boolean isVerified;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "user_roles",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private List<Role> roles;
 
    @Column(nullable = false, updatable = false)
    @CreationTimestamp
    private LocalDate createdAt;

    // Removed unnecessary fields not in synopsis (verificationCode, expirationTime, updatedAt, lists)
    // Keeping lists might be useful for JPA but synopsis didn't explicitly list them in the fields list, 
    // but implied relationships. I'll keep them out for strict adherence or add if needed.
    // Synopsis: "roles (ManyToMany)" is listed. "reservationList" is not explicitly listed in User fields but Reservation has "user (ManyToOne)".
}
```

---

### <a id="📄-src-main-java-com-parkease-entity-vehicle-java"></a>📄 `src/main/java/com/parkease/entity/Vehicle.java`

**File Info:**
- **Size**: 744 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/entity/Vehicle.java`
- **Relative Path**: `src/main/java/com/parkease/entity`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-27 06:34:51 (Asia/Calcutta / GMT+06:30)
- **MD5**: `3694946ca84b7d36857484ac22037112`
- **SHA256**: `af95b18b6bd6d99d97d292ac9b5814b883714496ed3eb32de99ca1b2e06a50f9`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.entity;

import com.parkease.enums.VehicleType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "vehicles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private VehicleType vehicleType;

    @Column(name = "plate_number", nullable = false)
    private String vehicleNumber;

    @OneToOne
    @JoinColumn(name = "reservation_id", nullable = false)
    private Reservation reservation;

}
```

---

### <a id="📄-src-main-java-com-parkease-enums-slotstatus-java"></a>📄 `src/main/java/com/parkease/enums/SlotStatus.java`

**File Info:**
- **Size**: 105 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/enums/SlotStatus.java`
- **Relative Path**: `src/main/java/com/parkease/enums`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-20 16:48:58 (Asia/Calcutta / GMT+06:30)
- **MD5**: `17d3240857d48a61f8da80f86566bea1`
- **SHA256**: `6322c05ff2113ea78763bc5b3249b0c275c32060732c8a134e2372c71e002245`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.enums;

public enum SlotStatus {
    AVAILABLE,
    RESERVED,
    OCCUPIED
}

```

---

### <a id="📄-src-main-java-com-parkease-enums-vehicletype-java"></a>📄 `src/main/java/com/parkease/enums/VehicleType.java`

**File Info:**
- **Size**: 119 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/enums/VehicleType.java`
- **Relative Path**: `src/main/java/com/parkease/enums`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-20 09:45:39 (Asia/Calcutta / GMT+06:30)
- **MD5**: `7c7376d369c26c9a18dfe740bcf6eee5`
- **SHA256**: `4d4fdb42f80d569548b54c2b3be73d92d0a383ab933d4fb9320ec7cad32025e2`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.enums;

public enum VehicleType {
    TWO_WHEELER,
    SUV,
    HATCHBACK,
    MINI_BUS
}

```

---

### <a id="📄-src-main-java-com-parkease-exception-badrequestexception-java"></a>📄 `src/main/java/com/parkease/exception/BadRequestException.java`

**File Info:**
- **Size**: 179 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/exception/BadRequestException.java`
- **Relative Path**: `src/main/java/com/parkease/exception`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-18 19:23:17 (Asia/Calcutta / GMT+06:30)
- **MD5**: `753bcd57a420b9872029a44b8abc0eaf`
- **SHA256**: `5addd144e18cf59d26b9a3ab04b5e6ac72ec7587b074c983b89ca2b90450e37e`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.exception;

public class BadRequestException extends RuntimeException {
    public BadRequestException(String message) {
        super(message);
    }
}
```

---

### <a id="📄-src-main-java-com-parkease-exception-globalexceptionhandler-java"></a>📄 `src/main/java/com/parkease/exception/GlobalExceptionHandler.java`

**File Info:**
- **Size**: 2.85 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/exception/GlobalExceptionHandler.java`
- **Relative Path**: `src/main/java/com/parkease/exception`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 12:45:22 (Asia/Calcutta / GMT+06:30)
- **MD5**: `0f6b9946bc432c643999d1b225ff29a5`
- **SHA256**: `21ba589273890ed01cb56acddd312e38a68419947df4d4b599c03685b9e498ef`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.exception;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<Map<String, Object>> handleResourceNotFound(ResourceNotFoundException ex) {
        return buildResponse(HttpStatus.NOT_FOUND, ex.getMessage());
    }

    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<Map<String, Object>> handleBadRequest(BadRequestException ex) {
        return buildResponse(HttpStatus.BAD_REQUEST, ex.getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        
        Map<String, Object> response = new HashMap<>();
        response.put("timestamp", LocalDateTime.now());
        response.put("status", HttpStatus.BAD_REQUEST.value());
        response.put("error", "Validation Error");
        response.put("message", errors);
        
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> handleGlobalException(Exception ex) {
        ex.printStackTrace(); // Log the full stack trace for debugging
        return buildResponse(HttpStatus.INTERNAL_SERVER_ERROR, ex.getMessage());
    }
    
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<Map<String, Object>> handleRuntimeException(RuntimeException ex) {
        return buildResponse(HttpStatus.BAD_REQUEST, ex.getMessage());
    }

    private ResponseEntity<Map<String, Object>> buildResponse(HttpStatus status, String message) {
        Map<String, Object> response = new HashMap<>();
        response.put("timestamp", LocalDateTime.now());
        response.put("status", status.value());
        response.put("error", status.getReasonPhrase());
        response.put("message", message);
        return new ResponseEntity<>(response, status);
    }
    
   
}
```

---

### <a id="📄-src-main-java-com-parkease-exception-resourcenotfoundexception-java"></a>📄 `src/main/java/com/parkease/exception/ResourceNotFoundException.java`

**File Info:**
- **Size**: 199 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/exception/ResourceNotFoundException.java`
- **Relative Path**: `src/main/java/com/parkease/exception`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-13 09:33:47 (Asia/Calcutta / GMT+06:30)
- **MD5**: `6e1234cf2abfd7baa4a737d8ae05c3d6`
- **SHA256**: `8b2d1a9fd5d724413d96c77c42f29ed2794321b570a333b1f111f7805ea4d4a4`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.exception;

public class ResourceNotFoundException  extends RuntimeException {
    public ResourceNotFoundException(String message){
        super(message);
    }
    
}

```

---

### <a id="📄-src-main-java-com-parkease-repository-basepricerepository-java"></a>📄 `src/main/java/com/parkease/repository/BasePriceRepository.java`

**File Info:**
- **Size**: 359 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/repository/BasePriceRepository.java`
- **Relative Path**: `src/main/java/com/parkease/repository`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-22 12:42:18 (Asia/Calcutta / GMT+06:30)
- **MD5**: `2326e50c7d3826eda4f8f29f15f9240d`
- **SHA256**: `0d3ecaa98ea1a4a2cb0ab7fd15347d32dbb4b27e1386eb8b1d20e44bc3c1fe51`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.parkease.entity.BasePrice;
import com.parkease.enums.VehicleType;

public interface BasePriceRepository extends JpaRepository<BasePrice, Long> {
    Optional<BasePrice> findByVehicleType(VehicleType vehicleType);
}

```

---

### <a id="📄-src-main-java-com-parkease-repository-parkingslotrepository-java"></a>📄 `src/main/java/com/parkease/repository/ParkingSlotRepository.java`

**File Info:**
- **Size**: 1.29 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/repository/ParkingSlotRepository.java`
- **Relative Path**: `src/main/java/com/parkease/repository`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-26 07:56:09 (Asia/Calcutta / GMT+06:30)
- **MD5**: `3ff7197090b90c03fdd208ba61413d51`
- **SHA256**: `646b81f173f916b9b6b587c61315b55e0d51279a78ad4427ada560f677af3fc3`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.repository;

import java.util.List;

import com.parkease.entity.ParkingZone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.parkease.entity.ParkingSlot;
import com.parkease.entity.ParkingSlot.SlotStatus;

@Repository
public interface ParkingSlotRepository extends JpaRepository<ParkingSlot, Integer> {

  @Query("""
      SELECT s
      FROM ParkingSlot s
      WHERE s.parkingZone.id = :zoneId
        AND s.status = com.parkease.entity.ParkingSlot.SlotStatus.AVAILABLE
      """)
  List<ParkingSlot> findAvailableSlotsByZone(@Param("zoneId") Integer zoneId);

  List<ParkingSlot> findByParkingZoneIdAndStatus(
      Integer zoneId,
      ParkingSlot.SlotStatus status);

  @Query("SELECT z FROM ParkingZone z WHERE z.id = :zoneId")
  ParkingZone getZoneReference(@Param("zoneId") Integer zoneId);

  long countByStatus(ParkingSlot.SlotStatus status);

  List<ParkingSlot> findByParkingZone(ParkingZone parkingZone);

  long countByParkingZone(ParkingZone parkingZone);

  List<ParkingSlot> findByParkingZoneAndStatus(ParkingZone zone, ParkingSlot.SlotStatus status);
}

```

---

### <a id="📄-src-main-java-com-parkease-repository-parkingzonerepository-java"></a>📄 `src/main/java/com/parkease/repository/ParkingZoneRepository.java`

**File Info:**
- **Size**: 487 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/repository/ParkingZoneRepository.java`
- **Relative Path**: `src/main/java/com/parkease/repository`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 07:27:24 (Asia/Calcutta / GMT+06:30)
- **MD5**: `9c612931752fd0b9da4ebe365d97ca7a`
- **SHA256**: `1925bcddfebf52c3d7daae3a454498d1a13c93da38bb4da96b3f7b4a0ccdb4b2`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.parkease.entity.ParkingZone;

@Repository
public interface ParkingZoneRepository extends JpaRepository<ParkingZone, Integer> {
    Optional<ParkingZone> findByNameIgnoreCase(String name);
    List<ParkingZone> findByLocationContainingIgnoreCase(String location);
}
```

---

### <a id="📄-src-main-java-com-parkease-repository-paymenttransactionrepository-java"></a>📄 `src/main/java/com/parkease/repository/PaymentTransactionRepository.java`

**File Info:**
- **Size**: 348 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/repository/PaymentTransactionRepository.java`
- **Relative Path**: `src/main/java/com/parkease/repository`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 07:31:51 (Asia/Calcutta / GMT+06:30)
- **MD5**: `0cc95d5964cc5bf75bdadea7acdb4d7d`
- **SHA256**: `655a48453cb6346716f46ae12e546b7d1517a3e5f892152628fcb89e05af17bf`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.parkease.entity.PaymentTransaction;

@Repository
public interface PaymentTransactionRepository extends JpaRepository<PaymentTransaction, Integer> {

}
```

---

### <a id="📄-src-main-java-com-parkease-repository-reservationrepository-java"></a>📄 `src/main/java/com/parkease/repository/ReservationRepository.java`

**File Info:**
- **Size**: 2.67 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/repository/ReservationRepository.java`
- **Relative Path**: `src/main/java/com/parkease/repository`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 07:31:33 (Asia/Calcutta / GMT+06:30)
- **MD5**: `04e04f9506e15b4ef2e7b3b459bb565e`
- **SHA256**: `9213378e79ea6fd88022c6e166edaa965bf24d868221b2670e935ae163343e94`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.parkease.entity.Reservation;
import com.parkease.entity.Reservation.ReservationStatus;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

    // Expired pending reservations
    @Query("SELECT r FROM Reservation r WHERE r.status = 'PENDING' AND r.createdAt <= :expiryTime")
    List<Reservation> findExpiredReservations(@Param("expiryTime") LocalDateTime expiryTime);

    long countByStatus(ReservationStatus status);

    // Active reservations count
    @Query("SELECT COUNT(r) FROM Reservation r WHERE r.status = 'CONFIRMED'")
    long countActiveReservations();

    // Reservation history by user
    @Query("SELECT r FROM Reservation r WHERE r.user.id = :userId")
    List<Reservation> findByUserId(@Param("userId") Integer userId);

    // Check overlapping reservations
    @Query("""
        SELECT COUNT(r) > 0
        FROM Reservation r
        WHERE r.slot.id = :slotId
          AND r.status IN ('PENDING', 'CONFIRMED')
          AND (
               (:startTime BETWEEN r.startTime AND r.endTime)
            OR (:endTime BETWEEN r.startTime AND r.endTime)
            OR (r.startTime BETWEEN :startTime AND :endTime)
          )
    """)
    boolean existsOverlappingReservation(@Param("slotId") Integer slotId,
                                         @Param("startTime") LocalDateTime startTime,
                                         @Param("endTime") LocalDateTime endTime);

    // Pending reservations past start time
    @Query("""
        SELECT r FROM Reservation r
        WHERE r.status = 'PENDING'
          AND r.startTime < :now
    """)
    List<Reservation> findPendingReservationsPastStartTime(@Param("now") LocalDateTime now);

    // 🔥 TOTAL REVENUE (for admin dashboard)
    @Query("""
        SELECT COALESCE(SUM(r.amount), 0)
        FROM Reservation r
        WHERE r.status = 'CONFIRMED'
    """)
    double sumTotalRevenue();

    // 🔥 OCCUPANCY RATE (percentage of confirmed reservations vs total slots)
    @Query("""
    	    SELECT 
    	      CASE 
    	        WHEN (SELECT COUNT(s) FROM ParkingSlot s) = 0 THEN 0
    	        ELSE (COUNT(r) * 100.0) / (SELECT COUNT(s) FROM ParkingSlot s)
    	      END
    	    FROM Reservation r
    	    WHERE r.status = 'CONFIRMED'
    	""")
    	double calculateOccupancyRate();

  

}

```

---

### <a id="📄-src-main-java-com-parkease-repository-rolerepository-java"></a>📄 `src/main/java/com/parkease/repository/RoleRepository.java`

**File Info:**
- **Size**: 349 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/repository/RoleRepository.java`
- **Relative Path**: `src/main/java/com/parkease/repository`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 07:32:12 (Asia/Calcutta / GMT+06:30)
- **MD5**: `c3d3c55b88ed2b17fae0351385edd4c2`
- **SHA256**: `41c2aabd2d4539ed88471158d5eb505225a13118e1545f30b013b66f6c899401`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.parkease.entity.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(String name);
}
```

---

### <a id="📄-src-main-java-com-parkease-repository-userrepository-java"></a>📄 `src/main/java/com/parkease/repository/UserRepository.java`

**File Info:**
- **Size**: 483 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/repository/UserRepository.java`
- **Relative Path**: `src/main/java/com/parkease/repository`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 07:32:18 (Asia/Calcutta / GMT+06:30)
- **MD5**: `086e29d38ddb0a7f3c27c96426606244`
- **SHA256**: `050c4a689e4e8809e2b6dbda4be063c0c39ddf293bb1176acc1ea8e19b737670`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.parkease.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    @EntityGraph(attributePaths = "roles")
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
}
```

---

### <a id="📄-src-main-java-com-parkease-scheduler-reservationexpiryscheduler-java"></a>📄 `src/main/java/com/parkease/scheduler/ReservationExpiryScheduler.java`

**File Info:**
- **Size**: 1.19 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/scheduler/ReservationExpiryScheduler.java`
- **Relative Path**: `src/main/java/com/parkease/scheduler`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-20 19:12:07 (Asia/Calcutta / GMT+06:30)
- **MD5**: `fdab30a6655c280a30e06159b0dfa009`
- **SHA256**: `1588f2643162d7ea91546b7804d242ad187ca0812ccc6d41a4605e3563aaaf53`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.scheduler;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.parkease.entity.ParkingSlot;
import com.parkease.entity.Reservation;
import com.parkease.repository.ParkingSlotRepository;
import com.parkease.repository.ReservationRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class ReservationExpiryScheduler {

    private final ReservationRepository reservationRepository;
    private final ParkingSlotRepository parkingSlotRepository;

    // Runs every 60 seconds
    @Scheduled(fixedRate = 60000)
    public void expireReservations() {

        List<Reservation> expired =
                reservationRepository.findExpiredReservations(LocalDateTime.now());

        for (Reservation r : expired) {
            r.setStatus(Reservation.ReservationStatus.EXPIRED);

            ParkingSlot slot = r.getSlot();
            slot.setStatus(ParkingSlot.SlotStatus.AVAILABLE);

            reservationRepository.save(r);
            parkingSlotRepository.save(slot);
        }
    }
}

```

---

### <a id="📄-src-main-java-com-parkease-security-customuserdetails-java"></a>📄 `src/main/java/com/parkease/security/CustomUserDetails.java`

**File Info:**
- **Size**: 1.38 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/security/CustomUserDetails.java`
- **Relative Path**: `src/main/java/com/parkease/security`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-25 22:59:33 (Asia/Calcutta / GMT+06:30)
- **MD5**: `d0e886d7ae1cf3a27671e90fde212791`
- **SHA256**: `562ece8993a507606818562108f5d7abc14e4459888a86c441f41f97337f8a9d`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.security;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.parkease.entity.User;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CustomUserDetails implements UserDetails {

    private User user;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName()))
                .collect(Collectors.toList());
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    // Get the actual User entity
    public User getUser() {
        return user;
    }
}

```

---

### <a id="📄-src-main-java-com-parkease-security-jwtauthenticationfilter-java"></a>📄 `src/main/java/com/parkease/security/JwtAuthenticationFilter.java`

**File Info:**
- **Size**: 3.07 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/security/JwtAuthenticationFilter.java`
- **Relative Path**: `src/main/java/com/parkease/security`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-25 22:38:01 (Asia/Calcutta / GMT+06:30)
- **MD5**: `5ab0644dbdd422f05ca0125328a205d2`
- **SHA256**: `2234bdc84825b6b5b14b5d2bba5e48d9d6d320b83b5d33810d0fede88b0d975e`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.security;

import com.parkease.service.CustomUserDetailsService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain) throws ServletException, IOException {

        // Extract Authorization header
        final String authHeader = request.getHeader("Authorization");

        // If no auth header or doesn't start with Bearer, skip
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        try {
            // Extract JWT token (remove "Bearer " prefix)
            final String jwt = authHeader.substring(7);

            // Extract username from token
            final String username = jwtUtil.extractUsername(jwt);

            // Authenticate if username valid and not already authenticated
            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {

                // Load user details
                UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);

                // Validate token
                if (jwtUtil.isTokenValid(jwt, userDetails)) {

                    // Create authentication token
                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                            userDetails,
                            null,
                            userDetails.getAuthorities());

                    // Set details
                    authToken.setDetails(
                            new WebAuthenticationDetailsSource().buildDetails(request));

                    // Set authentication in context
                    SecurityContextHolder.getContext().setAuthentication(authToken);
                }
            }
        } catch (Exception e) {
            logger.error("Cannot set user authentication: {}", e);
        }

        // Continue filter chain
        filterChain.doFilter(request, response);
    }
}

```

---

### <a id="📄-src-main-java-com-parkease-security-jwtutil-java"></a>📄 `src/main/java/com/parkease/security/JwtUtil.java`

**File Info:**
- **Size**: 2.61 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/security/JwtUtil.java`
- **Relative Path**: `src/main/java/com/parkease/security`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-26 07:32:06 (Asia/Calcutta / GMT+06:30)
- **MD5**: `e6740ff27d78630dea0b3f26aaa6fdba`
- **SHA256**: `17300bcb18ad75323e031fd89fa502846dcb0add0753be28b98926070f198f3a`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtUtil {

    @Value("${JWT_SECRET:cGFya2Vhc2VTdXBlclNlY3VyZUp3dFNlY3JldEtleTIwMjZGb3JQcm9kdWN0aW9uVXNl}")
    private String secretKey;

    @Value("${JWT_EXPIRATION_HOURS:24}")
    private long jwtExpirationHours;

    private SecretKey getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String extractUsername(String token) {
        return getAllClaimsFromToken(token).getSubject();
    }

    public Date extractExpiration(String token) {
        return getAllClaimsFromToken(token).getExpiration();
    }

    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parser()
                .verifyWith(getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public Boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    public Boolean validateToken(String token, UserDetails userDetails) {
        return isTokenValid(token, userDetails);
    }

    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, userDetails.getUsername());
    }

    public String generateToken(String username) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, username);
    }

    private String createToken(Map<String, Object> claims, String subject) {
        long expirationMillis = jwtExpirationHours * 60 * 60 * 1000;
        return Jwts.builder()
                .claims(claims)
                .subject(subject)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + expirationMillis))
                .signWith(getSigningKey())
                .compact();
    }
}

```

---

### <a id="📄-src-main-java-com-parkease-security-securityconfig-java"></a>📄 `src/main/java/com/parkease/security/SecurityConfig.java`

**File Info:**
- **Size**: 4.33 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/security/SecurityConfig.java`
- **Relative Path**: `src/main/java/com/parkease/security`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-27 11:34:04 (Asia/Calcutta / GMT+06:30)
- **MD5**: `3afd2943dfec24a119d9d1879cd7a27d`
- **SHA256**: `0363dc8abf715cfe0482fdd8877b56605585c3bf1b38d2629b64b73b355fc297`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.security;

import com.parkease.service.CustomUserDetailsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.http.HttpMethod;
import org.springframework.web.cors.CorsConfigurationSource;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    private final CustomUserDetailsService userDetailsService;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final CorsConfigurationSource corsConfigurationSource;

    public SecurityConfig(CustomUserDetailsService userDetailsService,
            JwtAuthenticationFilter jwtAuthenticationFilter,
            CorsConfigurationSource corsConfigurationSource) {
        this.userDetailsService = userDetailsService;
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
        this.corsConfigurationSource = corsConfigurationSource;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .cors(cors -> cors.configurationSource(corsConfigurationSource))
                .authorizeHttpRequests(authz -> authz

                        // Public endpoints
                        .requestMatchers(
                                "/health/**",
                                "/auth/**",
                                "/test/**",
                                "/api/health/**",
                                "/api/test/**",
                                "/payment/demo/**",
                                "/payment/demo-controller/**",
                                "/payment/simulate",
                                "/payment/webhook",
                                "/error")
                        .permitAll()

                        // Allow OPTIONS preflight
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()

                        // Admin
                        .requestMatchers("/admin/**", "/api/admin/**").hasRole("ADMIN")

                        // User
                        .requestMatchers("/user/**", "/api/user/**").authenticated()

                        // Payment (other than demo)
                        .requestMatchers("/payment/**").authenticated()

                        .anyRequest().authenticated())
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider())
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

```

---

### <a id="📄-src-main-java-com-parkease-seeder-adminseeder-java"></a>📄 `src/main/java/com/parkease/seeder/AdminSeeder.java`

**File Info:**
- **Size**: 1.46 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/seeder/AdminSeeder.java`
- **Relative Path**: `src/main/java/com/parkease/seeder`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-18 21:31:50 (Asia/Calcutta / GMT+06:30)
- **MD5**: `87336444413e098fab3157d534f6ac58`
- **SHA256**: `a9f40a336814be10fcabf891d908dfd93f484059f70b7bd4ebd506818f3532b0`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.seeder;

import java.util.Collections;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.parkease.entity.Role;
import com.parkease.entity.User;
import com.parkease.repository.RoleRepository;
import com.parkease.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class AdminSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (!userRepository.existsByEmail("admin@parkease.com")) {
            Role adminRole = roleRepository.findByName("ROLE_ADMIN")
                    .orElseThrow(() -> new RuntimeException("ROLE_ADMIN not found"));

            User admin = new User();
            admin.setName("Admin User");
            admin.setEmail("admin@parkease.com");
            admin.setPassword(passwordEncoder.encode("admin123"));
            admin.setPhone("0000000000");
            admin.setVerified(true);
            admin.setRoles(Collections.singletonList(adminRole));

            userRepository.save(admin);
            System.out.println("Admin user seeded: admin@parkease.com / admin123");
        }
    }
}
```

---

### <a id="📄-src-main-java-com-parkease-seeder-demodataseeder-java"></a>📄 `src/main/java/com/parkease/seeder/DemoDataSeeder.java`

**File Info:**
- **Size**: 10.42 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/seeder/DemoDataSeeder.java`
- **Relative Path**: `src/main/java/com/parkease/seeder`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-26 08:03:56 (Asia/Calcutta / GMT+06:30)
- **MD5**: `5879c4ce304fa93b8f1fd9f28c7ea931`
- **SHA256**: `eafe0d044a95bac950f38777916bc686cac742efbff3e1dd9be69fe3c3c70c7d`
- **Encoding**: ASCII

**File code content:**

```java
// src/main/java/com/parkease/seeder/DemoDataSeeder.java
package com.parkease.seeder;

import com.parkease.entity.*;
import com.parkease.enums.VehicleType;
import com.parkease.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;

@Component
@RequiredArgsConstructor
@Slf4j
public class DemoDataSeeder implements CommandLineRunner {

    @Value("${demo.data.enabled:false}")
    private boolean demoDataEnabled;

    @Value("${demo.data.users.count:5}")
    private int usersCount;

    @Value("${demo.data.zones.count:2}")
    private int zonesCount;

    @Value("${demo.data.slots.per-zone:10}")
    private int slotsPerZone;

    @Value("${demo.data.reservations.count:20}")
    private int reservationsCount;

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final ParkingZoneRepository parkingZoneRepository;
    private final ParkingSlotRepository parkingSlotRepository;
    private final ReservationRepository reservationRepository;
    private final BasePriceRepository basePriceRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        if (!demoDataEnabled) {
            log.info("Demo data seeding is disabled");
            return;
        }

        log.info("<<<< FORCE-RESEEDING DEMO DATA >>>>");

        try {
            // Delete in order to avoid FK constraints
            reservationRepository.deleteAllInBatch();
            parkingSlotRepository.deleteAllInBatch();
            parkingZoneRepository.deleteAllInBatch();
            log.info("✅ Database cleaned");
        } catch (Exception e) {
            log.warn("⚠️ Error during cleanup (might be due to constraints): {}", e.getMessage());
        }

        // Ensure roles exist
        seedRoles();

        // Ensure base prices exist
        seedBasePrices();

        // Seed admin user
        seedAdminUser();

        // Seed demo users
        seedDemoUsers();

        // Seed parking zones
        seedParkingZones();

        // Seed parking slots
        seedParkingSlots();

        // Seed demo reservations
        seedDemoReservations();

        log.info("✅ Demo data seeding completed successfully");
        log.info("Zone Count: {}", parkingZoneRepository.count());
        log.info("Slot Count: {}", parkingSlotRepository.count());
    }

    private void seedRoles() {
        if (roleRepository.count() == 0) {
            Role userRole = new Role("ROLE_USER");
            Role adminRole = new Role("ROLE_ADMIN");

            roleRepository.saveAll(Arrays.asList(userRole, adminRole));
            log.info("Roles seeded: USER, ADMIN");
        }
    }

    private void seedBasePrices() {
        if (basePriceRepository.count() == 0) {
            List<BasePrice> prices = Arrays.asList(
                    createBasePrice(VehicleType.TWO_WHEELER, 30.0),
                    createBasePrice(VehicleType.HATCHBACK, 50.0),
                    createBasePrice(VehicleType.SUV, 70.0),
                    createBasePrice(VehicleType.MINI_BUS, 100.0));

            basePriceRepository.saveAll(prices);
            log.info("Base prices seeded for all vehicle types");
        }
    }

    private BasePrice createBasePrice(VehicleType type, double price) {
        BasePrice basePrice = new BasePrice();
        basePrice.setVehicleType(type);
        basePrice.setPricePerHour(price);
        return basePrice;
    }

    private void seedAdminUser() {
        if (!userRepository.existsByEmail("admin@parkease.com")) {
            Role adminRole = roleRepository.findByName("ROLE_ADMIN")
                    .orElseThrow(() -> new RuntimeException("ROLE_ADMIN not found"));

            User admin = new User();
            admin.setName("Admin User");
            admin.setEmail("admin@parkease.com");
            admin.setPassword(passwordEncoder.encode("admin123"));
            admin.setPhone("9999988888");
            admin.setVerified(true);
            admin.setRoles(List.of(adminRole));

            userRepository.save(admin);
            log.info("Admin user seeded");
        }
    }

    private void seedDemoUsers() {
        if (userRepository.count() <= 2) { // Only admin and maybe one user exist
            Role userRole = roleRepository.findByName("ROLE_USER")
                    .orElseThrow(() -> new RuntimeException("ROLE_USER not found"));

            List<User> users = new ArrayList<>();

            // Create primary demo user
            User demoUser = new User();
            demoUser.setName("Demo User");
            demoUser.setEmail("user@example.com");
            demoUser.setPassword(passwordEncoder.encode("password123"));
            demoUser.setPhone("8888877777");
            demoUser.setVerified(true);
            demoUser.setRoles(List.of(userRole));
            users.add(demoUser);

            // Create additional demo users
            for (int i = 1; i <= usersCount - 1; i++) {
                User user = new User();
                user.setName("User " + i);
                user.setEmail("user" + i + "@example.com");
                user.setPassword(passwordEncoder.encode("password123"));
                user.setPhone("700000000" + i);
                user.setVerified(true);
                user.setRoles(List.of(userRole));
                users.add(user);
            }

            userRepository.saveAll(users);
            log.info("Seeded {} demo users", users.size());
        }
    }

    private void seedParkingZones() {
        if (parkingZoneRepository.count() == 0) {
            List<ParkingZone> zones = Arrays.asList(
                    createZone("Downtown Parking", "Main Street, City Center", 50, true),
                    createZone("Mall Parking", "Shopping Complex Area", 80, true),
                    createZone("Airport Parking", "International Airport", 120, true),
                    createZone("Hospital Parking", "City General Hospital", 40, true),
                    createZone("Station Parking", "Central Railway Station", 60, true))
                    .subList(0, Math.min(zonesCount, 5));

            parkingZoneRepository.saveAll(zones);
            log.info("Seeded {} parking zones", zones.size());
        }
    }

    private ParkingZone createZone(String name, String location, int capacity, boolean active) {
        ParkingZone zone = new ParkingZone();
        zone.setName(name);
        zone.setLocation(location);
        zone.setTotalSlots(capacity);
        zone.setActive(active);
        return zone;
    }

    private void seedParkingSlots() {
        List<ParkingZone> zones = parkingZoneRepository.findAll();
        List<ParkingSlot> slotsToSave = new ArrayList<>();

        for (ParkingZone zone : zones) {
            long existingSlotsCount = parkingSlotRepository.countByParkingZone(zone);
            if (existingSlotsCount == 0) {
                log.info("Seeding {} slots for zone: {}", slotsPerZone, zone.getName());
                for (int i = 1; i <= slotsPerZone; i++) {
                    ParkingSlot slot = new ParkingSlot();
                    slot.setSlotNumber("S" + String.format("%03d", i));
                    slot.setParkingZone(zone);
                    slot.setStatus(ParkingSlot.SlotStatus.AVAILABLE);
                    slotsToSave.add(slot);
                }
            }
        }

        if (!slotsToSave.isEmpty()) {
            parkingSlotRepository.saveAll(slotsToSave);
            log.info("Seeded {} new parking slots", slotsToSave.size());
        }
    }

    private void seedDemoReservations() {
        if (reservationRepository.count() == 0) {
            List<User> users = userRepository.findAll()
                    .stream()
                    .filter(u -> u.getEmail().contains("@example.com"))
                    .toList();

            List<ParkingSlot> slots = parkingSlotRepository.findAll();

            if (users.isEmpty() || slots.isEmpty()) {
                log.warn("Cannot seed reservations: insufficient users or slots");
                return;
            }

            List<Reservation> reservations = new ArrayList<>();

            for (int i = 0; i < Math.min(reservationsCount, 50); i++) {
                try {
                    Reservation reservation = createDemoReservation(
                            users.get(i % users.size()),
                            slots.get(i % slots.size()));
                    reservations.add(reservation);
                } catch (Exception e) {
                    log.warn("Failed to create demo reservation {}: {}", i, e.getMessage());
                }
            }

            reservationRepository.saveAll(reservations);
            log.info("Seeded {} demo reservations", reservations.size());
        }
    }

    private Reservation createDemoReservation(User user, ParkingSlot slot) {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime startTime = now.minusDays(ThreadLocalRandom.current().nextInt(1, 30));
        LocalDateTime endTime = startTime.plusHours(ThreadLocalRandom.current().nextInt(1, 8));

        Reservation reservation = new Reservation();
        reservation.setUser(user);
        reservation.setSlot(slot);
        reservation.setStartTime(startTime);
        reservation.setEndTime(endTime);

        // Random status
        String[] statuses = { "CONFIRMED", "COMPLETED", "CANCELLED" };
        Reservation.ReservationStatus status = Reservation.ReservationStatus.valueOf(
                statuses[ThreadLocalRandom.current().nextInt(statuses.length)]);
        reservation.setStatus(status);

        // Calculate amount
        long hours = java.time.Duration.between(startTime, endTime).toHours();
        double amount = hours * 50.0; // Base rate

        reservation.setAmount(amount);
        reservation.setCreatedAt(startTime.minusMinutes(30));

        return reservation;
    }
}
```

---

### <a id="📄-src-main-java-com-parkease-seeder-roleseeder-java"></a>📄 `src/main/java/com/parkease/seeder/RoleSeeder.java`

**File Info:**
- **Size**: 1.09 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/seeder/RoleSeeder.java`
- **Relative Path**: `src/main/java/com/parkease/seeder`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-18 10:53:27 (Asia/Calcutta / GMT+06:30)
- **MD5**: `5624c238805e328244ed339678163b02`
- **SHA256**: `e57ca74c50322f6137bfc0d3f7b630d38a8f5f67aa3e92ad6649de226be2961f`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.seeder;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Component
public class RoleSeeder implements CommandLineRunner {

    @PersistenceContext
    private EntityManager em;

    @Override
    @Transactional
    public void run(String... args) {

        Long count = ((Number) em
                .createNativeQuery("SELECT COUNT(*) FROM roles")
                .getSingleResult())
                .longValue();

        if (count == 0) {
            em.createNativeQuery(
                "INSERT INTO roles (id, name) VALUES (1, 'ROLE_USER')"
            ).executeUpdate();

            em.createNativeQuery(
                "INSERT INTO roles (id, name) VALUES (2, 'ROLE_ADMIN')"
            ).executeUpdate();

            System.out.println("Roles seeded successfully!");
            System.out.println("ROLE_USER ---> 1 , ROLE_ADMIN ---> 2");
        }
    }
}

```

---

### <a id="📄-src-main-java-com-parkease-service-adminanalyticsservice-java"></a>📄 `src/main/java/com/parkease/service/AdminAnalyticsService.java`

**File Info:**
- **Size**: 1.95 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/service/AdminAnalyticsService.java`
- **Relative Path**: `src/main/java/com/parkease/service`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-22 11:58:07 (Asia/Calcutta / GMT+06:30)
- **MD5**: `ea2c4dc5f0de915dba6a508657b90bbf`
- **SHA256**: `7e37008ce51ad7cff457f3ba2f4019c19e58b6162a44b139a64dc168d1a58912`
- **Encoding**: UTF-8

**File code content:**

```java
package com.parkease.service;

import java.util.*;

import org.springframework.stereotype.Service;

import com.parkease.dto.response.AdminStatsResponse;
import com.parkease.repository.ReservationRepository;
import com.parkease.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminAnalyticsService {

    private final ReservationRepository reservationRepository;
    private final UserRepository userRepository;

    public AdminStatsResponse getReports() {

        double totalRevenue = reservationRepository.sumTotalRevenue();
        long activeReservations = reservationRepository.countActiveReservations();
        long totalUsers = userRepository.count();
        double occupancyRate = reservationRepository.calculateOccupancyRate();

        // 🔥 WEEKLY PEAK HOURS (SAFE VERSION)
        Map<String, Long> peakMap = new LinkedHashMap<>();
        peakMap.put("MON", 0L);
        peakMap.put("TUE", 0L);
        peakMap.put("WED", 0L);
        peakMap.put("THU", 0L);
        peakMap.put("FRI", 0L);
        peakMap.put("SAT", 0L);
        peakMap.put("SUN", 0L);

        var reservations = reservationRepository.findAll();

        for (var r : reservations) {
            if (r.getStartTime() != null) {
                String day = r.getStartTime().getDayOfWeek().name().substring(0, 3);
                peakMap.put(day, peakMap.get(day) + 1);
            }
        }

        List<Map<String, Object>> weeklyPeakHours = new ArrayList<>();
        peakMap.forEach((day, count) -> {
            Map<String, Object> obj = new HashMap<>();
            obj.put("name", day);
            obj.put("count", count);
            weeklyPeakHours.add(obj);
        });

        return new AdminStatsResponse(
            totalRevenue,
            activeReservations,
            totalUsers,
            occupancyRate,
            weeklyPeakHours
        );
    }
}

```

---

### <a id="📄-src-main-java-com-parkease-service-authservice-java"></a>📄 `src/main/java/com/parkease/service/AuthService.java`

**File Info:**
- **Size**: 3.28 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/service/AuthService.java`
- **Relative Path**: `src/main/java/com/parkease/service`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-25 22:59:33 (Asia/Calcutta / GMT+06:30)
- **MD5**: `68717fd6d8819aaa8f48030857545a55`
- **SHA256**: `8406fee39970c2dd7c5155446bd8994f1fb39d1cb8dae9244846e9d65e102475`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.parkease.dto.request.LoginRequest;
import com.parkease.dto.request.RegisterRequest;
import com.parkease.dto.response.LoginResponse;
import com.parkease.dto.response.RegisterUserResponseDto;
import com.parkease.entity.Role;
import com.parkease.entity.User;
import com.parkease.repository.RoleRepository;
import com.parkease.repository.UserRepository;
import com.parkease.security.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final RoleRepository roleRepository;
    private final AuthenticationManager authManager;
    private final CustomUserDetailsService userDetailsService;

    // Register a new user
    public RegisterUserResponseDto registerUser(RegisterRequest request) {
        if (userRepository.existsByEmail(request.email())) {
            throw new RuntimeException("Email already registered");
        }

        List<Role> roles = new ArrayList<>();
        Role userRole = roleRepository.findByName("ROLE_USER")
                .orElseThrow(() -> new RuntimeException("Role not found"));
        roles.add(userRole);

        User user = new User();
        user.setName(request.name());
        user.setEmail(request.email());
        user.setPassword(passwordEncoder.encode(request.password()));
        user.setPhone(request.phone());
        user.setRoles(roles);
        user.setVerified(true); // Auto-verify for simplicity

        userRepository.save(user);

        return new RegisterUserResponseDto(
                user.getId().intValue(),
                user.getName(),
                user.getEmail(),
                user.getPhone(),
                user.getRoles());
    }

    // Authenticate user and generate token
    public Object authenticateUser(LoginRequest request) {

        // Authenticate with Spring Security
        authManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.email(), request.password()));

        // Load UserDetails
        UserDetails userDetails = userDetailsService.loadUserByUsername(request.email());

        // Fetch full user from DB
        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Get first role (ADMIN or USER)
        String role = user.getRoles().isEmpty() ? "ROLE_USER" : user.getRoles().get(0).getName();

        // Generate token using UserDetails
        String token = jwtUtil.generateToken(userDetails);

        // Return full login response
        return new LoginResponse(
                token,
                role,
                user.getEmail(),
                user.getName());
    }
}

```

---

### <a id="📄-src-main-java-com-parkease-service-customuserdetailsservice-java"></a>📄 `src/main/java/com/parkease/service/CustomUserDetailsService.java`

**File Info:**
- **Size**: 1013 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/service/CustomUserDetailsService.java`
- **Relative Path**: `src/main/java/com/parkease/service`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-25 22:59:33 (Asia/Calcutta / GMT+06:30)
- **MD5**: `5569ca687a80dbcf1bcb29761436fb17`
- **SHA256**: `a6d055d3d288ad2e4536e08228c19ac346100952907be6d22e6a779491686273`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.parkease.entity.User;
import com.parkease.repository.UserRepository;
import com.parkease.security.CustomUserDetails;

import lombok.RequiredArgsConstructor;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));

        return new CustomUserDetails(user);
    }
}
```

---

### <a id="📄-src-main-java-com-parkease-service-demopaymentservice-java"></a>📄 `src/main/java/com/parkease/service/DemoPaymentService.java`

**File Info:**
- **Size**: 6.73 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/service/DemoPaymentService.java`
- **Relative Path**: `src/main/java/com/parkease/service`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 11:04:25 (Asia/Calcutta / GMT+06:30)
- **MD5**: `551643adb6b306c3bb1610e709ba8b2e`
- **SHA256**: `3f95d3d383c5a15438f76e8c478d147db0e0f87c4dac227323ef648aabfe9a2a`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.service;


import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
@Slf4j
public class DemoPaymentService {

    @Value("${payment.demo-mode:true}")
    private boolean demoMode;

    @Value("${payment.demo.success-rate:100}")
    private int successRate;

    @Value("${payment.demo.delay-milliseconds:2000}")
    private int delayMilliseconds;

    @Value("${payment.currency:INR}")
    private String currency;

    /**
     * Create a demo payment order
     */
    public Map<String, Object> createDemoPaymentOrder(double amount, String description) {
        log.info("Creating demo payment order for amount: {} {}", amount, currency);

        // Simulate API call delay
        simulateProcessingDelay();

        String orderId = "demo_order_" + UUID.randomUUID().toString().substring(0, 8);
        String razorpayOrderId = "order_" + UUID.randomUUID().toString().substring(0, 14);

        Map<String, Object> response = new HashMap<>();
        response.put("id", orderId);
        response.put("razorpayOrderId", razorpayOrderId);
        response.put("amount", amount);
        response.put("currency", currency);
        response.put("description", description);
        response.put("status", "created");
        response.put("createdAt", LocalDateTime.now().toString());
        response.put("demo", true);
        response.put("message", "This is a demo payment. No real transaction occurred.");

        // Add demo gateway credentials
        response.put("demoKeyId", "rzp_test_demo_1234567890");
        response.put("demoSecret", "demo_secret_abcdefghijklmnop");

        log.debug("Demo payment order created: {}", orderId);
        return response;
    }

    /**
     * Verify demo payment
     */
    public Map<String, Object> verifyDemoPayment(String orderId, String paymentId, String signature) {
        log.info("Verifying demo payment - Order: {}, Payment: {}", orderId, paymentId);

        // Simulate API call delay
        simulateProcessingDelay();

        // Simulate random failures based on success rate
        boolean isSuccess = Math.random() * 100 < successRate;

        Map<String, Object> response = new HashMap<>();
        response.put("orderId", orderId);
        response.put("paymentId", paymentId);
        response.put("signature", signature);
        response.put("verified", true);
        response.put("success", isSuccess);
        response.put("timestamp", LocalDateTime.now().toString());
        response.put("demo", true);

        if (isSuccess) {
            response.put("status", "captured");
            response.put("message", "Demo payment verified successfully");
            log.info("Demo payment verified successfully for order: {}", orderId);
        } else {
            response.put("status", "failed");
            response.put("message", "Demo payment failed (simulated failure)");
            response.put("failureReason", "Insufficient funds (demo)");
            log.warn("Demo payment failed for order: {}", orderId);
        }

        return response;
    }

    /**
     * Generate demo payment receipt
     */
    public Map<String, Object> generateDemoReceipt(String paymentId, double amount) {
        log.info("Generating demo receipt for payment: {}", paymentId);

        simulateProcessingDelay();

        String receiptId = "RCPT_" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();

        Map<String, Object> receipt = new HashMap<>();
        receipt.put("receiptId", receiptId);
        receipt.put("paymentId", paymentId);
        receipt.put("amount", amount);
        receipt.put("currency", currency);
        receipt.put("date", LocalDateTime.now().toString());
        receipt.put("status", "PAID");
        receipt.put("paymentMethod", "DEMO_CARD");
        receipt.put("cardLast4", "4242");
        receipt.put("cardNetwork", "VISA");
        receipt.put("demo", true);
        receipt.put("note", "This is a demo receipt. No real transaction occurred.");

        // Add QR code data for receipt
        receipt.put("qrData", String.format("ParkEase|%s|%s|%.2f|%s",
                receiptId, paymentId, amount, LocalDateTime.now()));

        log.debug("Demo receipt generated: {}", receiptId);
        return receipt;
    }

    /**
     * Get demo payment status
     */
    public Map<String, Object> getPaymentStatus(String paymentId) {
        log.debug("Getting demo payment status for: {}", paymentId);

        simulateProcessingDelay();

        Map<String, Object> status = new HashMap<>();
        status.put("paymentId", paymentId);
        status.put("status", "captured");
        status.put("amount", 100.0); // Example amount
        status.put("currency", currency);
        status.put("createdAt", LocalDateTime.now().minusMinutes(5).toString());
        status.put("capturedAt", LocalDateTime.now().minusMinutes(4).toString());
        status.put("method", "card");
        status.put("cardLast4", "4242");
        status.put("bank", "DEMO BANK");
        status.put("wallet", null);
        status.put("vpa", null);
        status.put("email", "demo@example.com");
        status.put("contact", "+919876543210");
        status.put("demo", true);

        return status;
    }

    /**
     * Simulate processing delay for realistic demo experience
     */
    private void simulateProcessingDelay() {
        try {
            Thread.sleep(delayMilliseconds);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            log.warn("Payment simulation delay interrupted");
        }
    }

    /**
     * Check if demo mode is enabled
     */
    public boolean isDemoMode() {
        return demoMode;
    }

    /**
     * Get demo payment instructions
     */
    public Map<String, Object> getDemoInstructions() {
        Map<String, Object> instructions = new HashMap<>();
        instructions.put("mode", "DEMO");
        instructions.put("testCards", getTestCards());
        instructions.put("successRate", successRate + "%");
        instructions.put("currency", currency);
        instructions.put("note", "No real money is charged in demo mode");

        return instructions;
    }

    private Map<String, String> getTestCards() {
        Map<String, String> cards = new HashMap<>();
        cards.put("success", "4111 1111 1111 1111");
        cards.put("failure", "4000 0000 0000 0002");
        cards.put("authentication", "4000 0025 0000 3155");
        return cards;
    }
}

```

---

### <a id="📄-src-main-java-com-parkease-service-demopaymentserviceimpl-java"></a>📄 `src/main/java/com/parkease/service/DemoPaymentServiceImpl.java`

**File Info:**
- **Size**: 1.3 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/service/DemoPaymentServiceImpl.java`
- **Relative Path**: `src/main/java/com/parkease/service`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 11:28:24 (Asia/Calcutta / GMT+06:30)
- **MD5**: `d9a495fbfa0b3e715d981aadbcc854ed`
- **SHA256**: `8e0f57844426c56a98954b14e857006fbf2fc6eed4f971d1a56c28b49a988e7f`
- **Encoding**: ASCII

**File code content:**

```java
// DemoPaymentServiceImpl.java  
package com.parkease.service;

import com.parkease.dto.request.PaymentRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class DemoPaymentServiceImpl implements PaymentService {
    
    private final DemoPaymentService demoPaymentService;

    @Override
    public Map<String, Object> initiatePayment(PaymentRequest request) {
        log.info("DEMO MODE: Initiating demo payment for reservation: {}", request.reservationId());
        
        Map<String, Object> demoResponse = new HashMap<>();
        demoResponse.put("mode", "DEMO");
        demoResponse.put("reservationId", request.reservationId());
        demoResponse.put("amount", request.amount());
        demoResponse.put("message", "Demo payment initiated - use test card: 4111 1111 1111 1111");
        demoResponse.put("instructions", demoPaymentService.getDemoInstructions());
        
        return demoResponse;
    }

    @Override
    public void verifyWebhookSignature(String payload) {
        log.info("DEMO MODE: Processing webhook");
        // Demo implementation - no real verification needed
    }
}
```

---

### <a id="📄-src-main-java-com-parkease-service-emailservice-java"></a>📄 `src/main/java/com/parkease/service/EmailService.java`

**File Info:**
- **Size**: 1.75 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/service/EmailService.java`
- **Relative Path**: `src/main/java/com/parkease/service`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 10:20:29 (Asia/Calcutta / GMT+06:30)
- **MD5**: `7cbe835f4670ced61c45f98910166b76`
- **SHA256**: `99dd9d874ec24fbec192b2c2bac2308c9b530130b234cead4d54884d817dd761`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.parkease.entity.Reservation;
import com.parkease.entity.User;

import lombok.RequiredArgsConstructor;

//Add EmailService
@Service
@RequiredArgsConstructor
public class EmailService {
 
 @Value("${spring.mail.username}")
 private String fromEmail;
 
 private final JavaMailSender mailSender;
 
 public void sendBookingConfirmation(User user, Reservation reservation) {
     SimpleMailMessage message = new SimpleMailMessage();
     message.setFrom(fromEmail);
     message.setTo(user.getEmail());
     message.setSubject("ParkEase - Booking Confirmation #" + reservation.getId());
     message.setText(createBookingEmailContent(user, reservation));
     mailSender.send(message);
 }
 
 private String createBookingEmailContent(User user, Reservation reservation) {
     return String.format("""
         Dear %s,
         
         Your parking reservation has been confirmed!
         
         Reservation Details:
         - Booking ID: %s
         - Parking Zone: %s
         - Slot Number: %s
         - Start Time: %s
         - End Time: %s
         - Amount Paid: ₹%.2f
         
         Thank you for using ParkEase!
         
         Best regards,
         ParkEase Team
         """, 
         user.getName(),
         reservation.getId(),
         reservation.getSlot().getParkingZone().getName(),
         reservation.getSlot().getSlotNumber(),
         reservation.getStartTime(),
         reservation.getEndTime(),
         reservation.getAmount()
     );
 }
}
```

---

### <a id="📄-src-main-java-com-parkease-service-parkingslotservice-java"></a>📄 `src/main/java/com/parkease/service/ParkingSlotService.java`

**File Info:**
- **Size**: 2.45 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/service/ParkingSlotService.java`
- **Relative Path**: `src/main/java/com/parkease/service`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 07:27:10 (Asia/Calcutta / GMT+06:30)
- **MD5**: `10039e92f7b5d351245057394439a3af`
- **SHA256**: `fade0827d9fc38621c36500c41ab3063de9bae2dbd992ed9ae71f8ec21de5bcc`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.parkease.entity.ParkingSlot;
import com.parkease.entity.ParkingZone;
import com.parkease.exception.ResourceNotFoundException;
import com.parkease.repository.ParkingSlotRepository;
import com.parkease.repository.ParkingZoneRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ParkingSlotService {

    private final ParkingSlotRepository parkingSlotRepository;
    private final ParkingZoneRepository parkingZoneRepository;

    // -------------------------------
    // ADD SLOT TO ZONE (ADMIN)
    // -------------------------------
    @Transactional
    public ParkingSlot createSlot(Integer zoneId) {

        ParkingZone zone = parkingZoneRepository.findById(zoneId)
                .orElseThrow(() -> new ResourceNotFoundException("Zone not found"));

        ParkingSlot slot = new ParkingSlot();
        slot.setParkingZone(zone);
        slot.setStatus(ParkingSlot.SlotStatus.AVAILABLE);

        return parkingSlotRepository.save(slot);
    }

    // -------------------------------
    // GET ALL SLOTS OF A ZONE (ADMIN)
    // -------------------------------
    public List<ParkingSlot> getSlotsByZone(Integer zoneId) {

        ParkingZone zone = parkingZoneRepository.findById(zoneId)
                .orElseThrow(() -> new ResourceNotFoundException("Zone not found"));

        return parkingSlotRepository.findByParkingZone(zone);
    }

    // -------------------------------
    // UPDATE SLOT STATUS (ADMIN)
    // -------------------------------
    @Transactional
    public ParkingSlot updateSlotStatus(Integer slotId, String status) {

        ParkingSlot slot = parkingSlotRepository.findById(slotId)
                .orElseThrow(() -> new ResourceNotFoundException("Slot not found"));

        slot.setStatus(ParkingSlot.SlotStatus.valueOf(status));

        return parkingSlotRepository.save(slot);
    }
    
    public List<ParkingSlot> getAvailableSlots(Integer zoneId) {

        ParkingZone zone = parkingZoneRepository.findById(zoneId)
                .orElseThrow(() -> new ResourceNotFoundException("Zone not found"));

        return parkingSlotRepository.findByParkingZoneAndStatus(
                zone,
                ParkingSlot.SlotStatus.AVAILABLE
        );
    }
}

```

---

### <a id="📄-src-main-java-com-parkease-service-parkingzoneservice-java"></a>📄 `src/main/java/com/parkease/service/ParkingZoneService.java`

**File Info:**
- **Size**: 2.82 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/service/ParkingZoneService.java`
- **Relative Path**: `src/main/java/com/parkease/service`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 11:26:02 (Asia/Calcutta / GMT+06:30)
- **MD5**: `520d53fc6189e881676d5565443dc89a`
- **SHA256**: `7dfb87d56000033fe2deec4a521b81007b46c71d5863aaabd5639a7bed05255f`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.service;

import java.util.List;

import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.stereotype.Service;

import com.parkease.dto.request.ParkingZoneDto;
import com.parkease.dto.response.ParkingZoneResponseDto;
import com.parkease.entity.ParkingZone;
import com.parkease.exception.ResourceNotFoundException;
import com.parkease.repository.ParkingZoneRepository;
import com.parkease.util.ParkingZoneMapper;

import lombok.RequiredArgsConstructor;

@Service
@CacheConfig(cacheNames = {"parkingZones"})
@RequiredArgsConstructor
public class ParkingZoneService {
    
    private final ParkingZoneRepository parkingZoneRepository;

   

    // Create a new parking zone
    @CacheEvict(key = "'allZones'")
    public ParkingZoneResponseDto createParkingZone(ParkingZoneDto parkingZoneDto) {
        ParkingZone parkingZone = ParkingZoneMapper.toEntity(parkingZoneDto);
        return ParkingZoneMapper.toResponseDto(parkingZoneRepository.save(parkingZone));
    }

    // List all parking zones (optionally filtered by location)
   
    public List<ParkingZoneResponseDto> getAllParkingZonesList(String location) {
        List<ParkingZone> zones;
        if (location != null && !location.isBlank()) {
            zones = parkingZoneRepository.findByLocationContainingIgnoreCase(location);
        } else {
            zones = parkingZoneRepository.findAll();
        }
        return zones.stream()
            .map(ParkingZoneMapper::toResponseDto)
            .toList();
    }

    // Find zone by name
    public ParkingZone getByName(String name) {
        return parkingZoneRepository.findByNameIgnoreCase(name)
            .orElseThrow(() -> new ResourceNotFoundException("ParkingZone not found with name " + name));
    }

    // Get parking zone by ID
    public ParkingZoneResponseDto getParkingZoneById(int id) {
        return parkingZoneRepository.findById(id)
            .map(ParkingZoneMapper::toResponseDto)
            .orElseThrow(() -> new ResourceNotFoundException("ParkingZone not found with id " + id));
    }

    // Update parking zone
    public ParkingZoneResponseDto updateParkingZone(int id, ParkingZoneDto parkingZoneDto) {
        ParkingZone parkingZone = parkingZoneRepository.findById( id)
            .orElseThrow(() -> new ResourceNotFoundException("ParkingZone not found"));
        parkingZone.setName(parkingZoneDto.name());
        parkingZone.setLocation(parkingZoneDto.location());
        parkingZone.setActive(parkingZoneDto.isActive());
        return ParkingZoneMapper.toResponseDto(parkingZoneRepository.save(parkingZone));
    } 
    
    // Delete parking zone
    public void deleteParkingZone(int id) {
        parkingZoneRepository.deleteById( id);
    }
}
```

---

### <a id="📄-src-main-java-com-parkease-service-paymentservice-java"></a>📄 `src/main/java/com/parkease/service/PaymentService.java`

**File Info:**
- **Size**: 329 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/service/PaymentService.java`
- **Relative Path**: `src/main/java/com/parkease/service`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 11:27:29 (Asia/Calcutta / GMT+06:30)
- **MD5**: `368be624541c02e6e1fffcb9b3270499`
- **SHA256**: `d8b12b1f29fb856f869499830b1fcec2ef382bdb47116697b475079efe1bc561`
- **Encoding**: ASCII

**File code content:**

```java
// PaymentService.java
package com.parkease.service;

import com.parkease.dto.request.PaymentRequest;

import java.util.Map;

public interface PaymentService {
    Map<String, Object> initiatePayment(PaymentRequest request);
    void verifyWebhookSignature(String payload);
    // Add other payment methods as needed
}
```

---

### <a id="📄-src-main-java-com-parkease-service-pricingservice-java"></a>📄 `src/main/java/com/parkease/service/PricingService.java`

**File Info:**
- **Size**: 1.93 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/service/PricingService.java`
- **Relative Path**: `src/main/java/com/parkease/service`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-22 12:53:12 (Asia/Calcutta / GMT+06:30)
- **MD5**: `14deef6f2c5f120f7c2df841b1c95819`
- **SHA256**: `2f0d3f185efe9665582465d5c4aa34f4337f2e33f76ef14972a62c920aa05c6c`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.service;

import java.time.Duration;
import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.parkease.entity.BasePrice;
import com.parkease.enums.VehicleType;
import com.parkease.repository.BasePriceRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PricingService {

	private final BasePriceRepository basePriceRepository;

	// -------------------------------
	// CALCULATE PRICE USING ADMIN BASE RATES
	// -------------------------------
	public double calculatePrice(VehicleType vehicleType, LocalDateTime startTime, LocalDateTime endTime) {

		if (vehicleType == null) {
			throw new RuntimeException("Vehicle type is required for pricing");
		}

		if (startTime == null || endTime == null || endTime.isBefore(startTime)) {
			throw new RuntimeException("Invalid start or end time");
		}

		// Calculate total hours (minimum 1 hour)
		long hours = Duration.between(startTime, endTime).toHours();
		if (hours <= 0) {
			hours = 1;
		}

		// Get base price from database (admin configured)
		BasePrice basePrice = basePriceRepository.findByVehicleType(vehicleType)
				.orElseThrow(() -> new RuntimeException("Base price not configured for " + vehicleType));

		// Final amount = hours × price per hour
		return hours * basePrice.getPricePerHour();
	}

	// -------------------------------
	// PREVIEW PRICE BY HOURS (FOR UI CALCULATOR)
	// -------------------------------
	public double calculatePriceByHours(VehicleType vehicleType, int hours) {

		if (vehicleType == null) {
			throw new RuntimeException("Vehicle type is required");
		}

		if (hours <= 0) {
			hours = 1;
		}

		BasePrice basePrice = basePriceRepository.findByVehicleType(vehicleType)
				.orElseThrow(() -> new RuntimeException("Base price not configured for " + vehicleType));

		return hours * basePrice.getPricePerHour();
	}
}

```

---

### <a id="📄-src-main-java-com-parkease-service-qrcodeservice-java"></a>📄 `src/main/java/com/parkease/service/QRCodeService.java`

**File Info:**
- **Size**: 3.6 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/service/QRCodeService.java`
- **Relative Path**: `src/main/java/com/parkease/service`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-20 19:58:47 (Asia/Calcutta / GMT+06:30)
- **MD5**: `7903ac96275be5421bd39dc8a48bd9c9`
- **SHA256**: `de6e1ebf9be0f49537f20f4b0e520eb8f21c5486c87ffcf3de4f46df68cf2c97`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.service;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.qrcode.QRCodeWriter;
import com.parkease.entity.ParkingSlot;
import com.google.zxing.common.BitMatrix;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.awt.image.BufferedImage;
import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.image.RenderedImage;
import javax.imageio.ImageIO;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import com.google.zxing.MultiFormatReader;
import com.google.zxing.ReaderException;
import com.google.zxing.Result;
import com.google.zxing.common.HybridBinarizer;
import java.io.ByteArrayInputStream;
import com.google.zxing.client.j2se.BufferedImageLuminanceSource;

@Service
public class QRCodeService {
   
    @Value("${file.qrcode-dir}")
    private String qrCodeDirectory ;

    // Generate QR code image from text
    public byte[] generateQRCode(String text) throws WriterException, IOException {
        QRCodeWriter qrCodeWriter = new QRCodeWriter();
        BitMatrix bitMatrix = qrCodeWriter.encode(text, BarcodeFormat.QR_CODE, 200, 200);
        
        BufferedImage bufferedImage = new BufferedImage(200, 200, BufferedImage.TYPE_INT_RGB);
        bufferedImage.createGraphics().fillRect(0, 0, 200, 200);
        Graphics2D graphics = (Graphics2D) bufferedImage.getGraphics();
        graphics.setColor(Color.BLACK);
        
        for (int x = 0; x < 200; x++) {
            for (int y = 0; y < 200; y++) {
                if (bitMatrix.get(x, y)) {
                    graphics.fillRect(x, y, 1, 1);
                }
            }
        }
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write((RenderedImage) bufferedImage, "png", baos);
        return baos.toByteArray();
    }

    // Read text from QR code image
    public String readQRCode(byte[] imageBytes) throws IOException {
            ByteArrayInputStream bais = new ByteArrayInputStream(imageBytes);
            BufferedImage bufferedImage = ImageIO.read(bais);
            
            BufferedImageLuminanceSource source = new BufferedImageLuminanceSource(bufferedImage);
            HybridBinarizer binarizer = new HybridBinarizer(source);
            com.google.zxing.BinaryBitmap bitmap = new com.google.zxing.BinaryBitmap(binarizer);
            MultiFormatReader reader = new MultiFormatReader();           
            try {
                Result result = reader.decode(bitmap);
                return result.getText();
            } catch (ReaderException e) {
                return "Error reading QR code";
            }
    }

    // Save QR code image for a slot
    public String saveQRCodeImage(ParkingSlot slot) throws IOException, WriterException {
        String toBeEncodedText =
                "PZ" + slot.getParkingZone().getId() + "_S" + slot.getSlotNumber();



        Path qrCodeDir = Paths.get(qrCodeDirectory).toAbsolutePath().normalize();
        Files.createDirectories(qrCodeDir);

        String fileName =
                "PZ" + slot.getParkingZone().getId() + "_S" + slot.getSlotNumber() + ".png";

        Path targetLocation = qrCodeDir.resolve(fileName);

        if (!Files.exists(targetLocation)) {
            byte[] qrCodeBytes = generateQRCode(toBeEncodedText);
            Files.write(targetLocation, qrCodeBytes);
        }
        return qrCodeDirectory + fileName;
    }
}
```

---

### <a id="📄-src-main-java-com-parkease-service-reservationservice-java"></a>📄 `src/main/java/com/parkease/service/ReservationService.java`

**File Info:**
- **Size**: 6.71 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/service/ReservationService.java`
- **Relative Path**: `src/main/java/com/parkease/service`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-27 06:34:43 (Asia/Calcutta / GMT+06:30)
- **MD5**: `8072599b38a9ca79d4f735ea365fd89e`
- **SHA256**: `8eec11ed22148f861b3a67f0e54b74ab8ef5ebbe16580d1af00c2ccdda000d85`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.service;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

import com.parkease.enums.VehicleType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.parkease.dto.response.ReservationResponseDto;
import com.parkease.entity.ParkingSlot;
import com.parkease.entity.PaymentTransaction;
import com.parkease.entity.Reservation;
import com.parkease.entity.User;
import com.parkease.entity.Vehicle;
import com.parkease.exception.BadRequestException;
import com.parkease.exception.ResourceNotFoundException;
import com.parkease.repository.ParkingSlotRepository;
import com.parkease.repository.PaymentTransactionRepository;
import com.parkease.repository.ReservationRepository;
import com.parkease.util.ReservationMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReservationService {

    private final ReservationRepository reservationRepository;
    private final ParkingSlotRepository parkingSlotRepository;
    private final PaymentTransactionRepository paymentTransactionRepository;
    private final PricingService pricingService;
    private final ReservationMapper reservationMapper;

    // -------------------------------
    // CREATE RESERVATION
    // -------------------------------
    @Transactional
    public ReservationResponseDto createReservation(Integer slotId,
            LocalDateTime startTime,
            LocalDateTime endTime,
            String vehicleType,
            String vehicleNumber,
            User user) {

        if (startTime.isAfter(endTime) || startTime.isEqual(endTime)) {
            throw new BadRequestException("End time must be after start time");
        }

        ParkingSlot slot = parkingSlotRepository.findById(slotId)
                .orElseThrow(() -> new ResourceNotFoundException("Slot not found"));

        if (slot.getStatus() != ParkingSlot.SlotStatus.AVAILABLE) {
            throw new BadRequestException("Slot is not available");
        }

        boolean overlapping = reservationRepository.existsOverlappingReservation(slotId, startTime, endTime);

        if (overlapping) {
            throw new BadRequestException("Slot already reserved for selected time");
        }

        // -------------------------------
        // CREATE VEHICLE
        // -------------------------------
        Vehicle vehicle = new Vehicle();
        VehicleType type = VehicleType.valueOf(vehicleType);
        vehicle.setVehicleType(type);
        vehicle.setVehicleNumber(vehicleNumber);

        // -------------------------------
        // CALCULATE TOTAL HOURS (MIN 1 HOUR)
        // -------------------------------
        long hours = ChronoUnit.HOURS.between(startTime, endTime);
        if (hours <= 0) {
            hours = 1;
        }

        // -------------------------------
        // 🔥 CALCULATE AMOUNT (ADMIN BASE PRICING)
        // -------------------------------
        double amount = pricingService.calculatePriceByHours(type, (int) hours);

        // -------------------------------
        // CREATE RESERVATION
        // -------------------------------
        Reservation reservation = new Reservation();
        reservation.setUser(user);
        reservation.setSlot(slot);
        reservation.setStartTime(startTime);
        reservation.setEndTime(endTime);
        reservation.setStatus(Reservation.ReservationStatus.PENDING);
        reservation.setAmount(amount);
        reservation.setVehicle(vehicle);

        vehicle.setReservation(reservation);

        reservationRepository.save(reservation);

        // 🔒 TEMPORARILY LOCK SLOT
        slot.setStatus(ParkingSlot.SlotStatus.RESERVED);
        parkingSlotRepository.save(slot);

        return reservationMapper.toDto(reservation);
    }

    // -------------------------------
    // CONFIRM PAYMENT (DEMO / QR)
    // -------------------------------
    @Transactional
    public ReservationResponseDto confirmPayment(Integer reservationId,
            double amount,
            String paymentMode) {

        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new ResourceNotFoundException("Reservation not found"));

        if (reservation.getStatus() != Reservation.ReservationStatus.PENDING) {
            throw new BadRequestException("Reservation already processed");
        }

        PaymentTransaction tx = new PaymentTransaction();
        tx.setReservation(reservation);
        tx.setAmount(amount > 0 ? amount : reservation.getAmount());
        tx.setPaymentMode(paymentMode);
        tx.setStatus(PaymentTransaction.PaymentStatus.SUCCESS);
        tx.setTransactionTime(LocalDateTime.now());

        paymentTransactionRepository.save(tx);

        // 🔥 CONFIRM RESERVATION
        reservation.setStatus(Reservation.ReservationStatus.CONFIRMED);
        reservation.setPaymentTransaction(tx);

        ParkingSlot slot = reservation.getSlot();
        slot.setStatus(ParkingSlot.SlotStatus.RESERVED);

        reservationRepository.save(reservation);
        parkingSlotRepository.save(slot);

        return reservationMapper.toDto(reservation);
    }

    // -------------------------------
    // USER RESERVATION HISTORY
    // -------------------------------
    public List<Reservation> getUserHistory(Integer userId) {
        return reservationRepository.findByUserId(userId);
    }

    // -------------------------------
    // CANCEL RESERVATION
    // -------------------------------
    @Transactional
    public Reservation cancelReservation(Integer reservationId, Integer userId) {

        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new ResourceNotFoundException("Reservation not found"));

        if (!reservation.getUser().getId().equals(userId)) {
            throw new BadRequestException("You can cancel only your own reservation");
        }

        if (reservation.getStatus() == Reservation.ReservationStatus.EXPIRED ||
                reservation.getStatus() == Reservation.ReservationStatus.CANCELLED) {
            throw new BadRequestException("Reservation is already inactive");
        }

        reservation.setStatus(Reservation.ReservationStatus.CANCELLED);

        ParkingSlot slot = reservation.getSlot();
        slot.setStatus(ParkingSlot.SlotStatus.AVAILABLE);

        parkingSlotRepository.save(slot);
        return reservationRepository.save(reservation);
    }

    public List<ReservationResponseDto> getReservationsByUser(Integer userId) {

        List<Reservation> reservations = reservationRepository.findByUserId(userId);

        return reservations.stream()
                .map(reservationMapper::toDto)
                .toList();
    }
}

```

---

### <a id="📄-src-main-java-com-parkease-service-userservice-java"></a>📄 `src/main/java/com/parkease/service/UserService.java`

**File Info:**
- **Size**: 1.79 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/service/UserService.java`
- **Relative Path**: `src/main/java/com/parkease/service`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-24 11:36:26 (Asia/Calcutta / GMT+06:30)
- **MD5**: `fcc2ae18d0e5197e0902f00f25f401ec`
- **SHA256**: `a3ce67d163595f2eff38159d09ec0e1ab94297a83ee949ec1c09f52e9e55f320`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.service;

import com.parkease.dto.request.UpdateProfileRequest;
import com.parkease.entity.User;
import com.parkease.exception.ResourceNotFoundException;
import com.parkease.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {
    
    private final UserRepository userRepository;
    
    /**
     * Update user profile information
     */
    @Transactional
    public User updateProfile(Integer userId, UpdateProfileRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        
        if (request.name() != null && !request.name().isBlank()) {
            user.setName(request.name());
        }
        
        if (request.phone() != null && !request.phone().isBlank()) {
            user.setPhone(request.phone());
        }
        
        return userRepository.save(user);
    }
    
    /**
     * Get user by ID
     */
    public User getUserById(Integer userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
    }
    
    /**
     * Get user by email
     */
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + email));
    }
    
    /**
     * Check if email exists
     */
    public boolean emailExists(String email) {
        return userRepository.existsByEmail(email);
    }
}
```

---

### <a id="📄-src-main-java-com-parkease-specification-reservationspecs-java"></a>📄 `src/main/java/com/parkease/specification/ReservationSpecs.java`

**File Info:**
- **Size**: 1.68 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/specification/ReservationSpecs.java`
- **Relative Path**: `src/main/java/com/parkease/specification`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-18 20:25:54 (Asia/Calcutta / GMT+06:30)
- **MD5**: `e00cb60ff2301f3a3087f6edc263bc2a`
- **SHA256**: `8de760f9e569f764a4b619adc00b3aebc55aefc34954c13a6c9e21a6de563beb`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.specification;

import org.springframework.data.jpa.domain.Specification;

import com.parkease.entity.Reservation;
import com.parkease.entity.Reservation.ReservationStatus;

import java.time.LocalDateTime;

public class ReservationSpecs {

    public static Specification<Reservation> hasUser(Integer userId) {
        return (root, query, builder) ->
                userId == null ? null : builder.equal(root.get("user").get("id"), userId);
    }

    public static Specification<Reservation> hasSlotId(Integer slotId) {
        return (root, query, builder) ->
                slotId == null ? null : builder.equal(root.get("slot").get("id"), slotId);
    }

    public static Specification<Reservation> hasParkingZoneId(Integer parkingZoneId) {
        return (root, query, builder) ->
                parkingZoneId == null ? null : builder.equal(root.get("slot").get("zone").get("id"), parkingZoneId);
    }

    public static Specification<Reservation> hasStatus(ReservationStatus status) {
        return (root, query, builder) ->
                status == null ? null : builder.equal(root.get("status"), status);
    }

    public static Specification<Reservation> betweenTime(LocalDateTime start, LocalDateTime end) {
        return (root, query, builder) -> {
            if (start == null && end == null) return null;
            if (start != null && end != null)
                return builder.between(root.get("startTime"), start, end);
            if (start != null)
                return builder.greaterThanOrEqualTo(root.get("startTime"), start);
            return builder.lessThanOrEqualTo(root.get("endTime"), end);
        };
    }
}
```

---

### <a id="📄-src-main-java-com-parkease-util-parkingzonemapper-java"></a>📄 `src/main/java/com/parkease/util/ParkingZoneMapper.java`

**File Info:**
- **Size**: 1016 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/util/ParkingZoneMapper.java`
- **Relative Path**: `src/main/java/com/parkease/util`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-23 08:48:45 (Asia/Calcutta / GMT+06:30)
- **MD5**: `0a33fdf0fe8c56029454fdb3524f9ead`
- **SHA256**: `a9eb2f999a4ca7c7db77735a0f357d70aa21f12d2613c7b343041a7b8177a0cd`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.util;

import com.parkease.dto.request.ParkingZoneDto;
import com.parkease.dto.response.ParkingZoneResponseDto;
import com.parkease.entity.ParkingZone;

public class ParkingZoneMapper {

    public static ParkingZone toEntity(ParkingZoneDto dto) {
        if (dto == null) return null;

        ParkingZone parkingZone = new ParkingZone();
        parkingZone.setName(dto.name());       
        parkingZone.setLocation(dto.location());
        parkingZone.setTotalSlots(dto.capacity());
        parkingZone.setActive(dto.isActive());

        return parkingZone;
    }

    public static ParkingZoneResponseDto toResponseDto(ParkingZone parkingZone) {
        if (parkingZone == null) return null;

        return new ParkingZoneResponseDto(
                parkingZone.getId(),
                parkingZone.getName(),
                parkingZone.getLocation(),
                parkingZone.isActive(),
                parkingZone.getTotalSlots()
        );
    }
}
```

---

### <a id="📄-src-main-java-com-parkease-util-reservationmapper-java"></a>📄 `src/main/java/com/parkease/util/ReservationMapper.java`

**File Info:**
- **Size**: 1.7 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/util/ReservationMapper.java`
- **Relative Path**: `src/main/java/com/parkease/util`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-21 06:13:12 (Asia/Calcutta / GMT+06:30)
- **MD5**: `b79d76580496446c17c187ed486857c3`
- **SHA256**: `15860aa8c69a8b9a4eeb027ff872042349618ab5488c9a6c693a14bc5d556bea`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.util;

import com.parkease.dto.request.ReservationRequest;
import com.parkease.dto.response.ReservationResponseDto;
import com.parkease.entity.Reservation;
import org.springframework.stereotype.Component;

@Component
public class ReservationMapper {

    public ReservationResponseDto toDto(Reservation r) {

        ReservationResponseDto dto = new ReservationResponseDto();

        dto.setId(r.getId());
        dto.setStartTime(r.getStartTime());
        dto.setEndTime(r.getEndTime());
        dto.setStatus(r.getStatus().name());
        dto.setAmount(r.getAmount());

        if (r.getSlot() != null) {
            dto.setSlotId(r.getSlot().getId());
            dto.setSlotNumber(r.getSlot().getSlotNumber());

            if (r.getSlot().getParkingZone() != null) {
                dto.setParkingZoneId(
                        r.getSlot().getParkingZone().getId()
                );
                dto.setZoneName(
                        r.getSlot().getParkingZone().getName()
                );
            }
        }

        if (r.getVehicle() != null) {
            dto.setVehicleType(
                    r.getVehicle().getVehicleType().name()
            );
            dto.setVehicleNumber(
                    r.getVehicle().getVehicleNumber()
            );
        }

        if (r.getPaymentTransaction() != null) {
            dto.setPaymentMode(
                    r.getPaymentTransaction().getPaymentMode()
            );
            dto.setTransactionId(
                    String.valueOf(
                            r.getPaymentTransaction().getId()
                    )
            );
        }

        return dto;
    }
}

```

---

### <a id="📄-src-main-java-com-parkease-util-slotmapper-java"></a>📄 `src/main/java/com/parkease/util/SlotMapper.java`

**File Info:**
- **Size**: 750 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/util/SlotMapper.java`
- **Relative Path**: `src/main/java/com/parkease/util`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-20 20:04:03 (Asia/Calcutta / GMT+06:30)
- **MD5**: `1f54ff9c44c123ccea0c06a400c8833d`
- **SHA256**: `480298e436e267549b6c2f823282c8d38d21c75d71515ec53fb81cf018b78d3f`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.util;

import com.parkease.dto.request.SlotDto;
import com.parkease.dto.response.SlotResponseDto;
import com.parkease.entity.ParkingSlot;
import org.springframework.stereotype.Component;

@Component
public class SlotMapper {

    public static ParkingSlot toEntity(SlotDto dto) {
        if (dto == null) return null;

        ParkingSlot slot = new ParkingSlot();
        slot.setSlotNumber(dto.slotNumber());
        return slot;
    }

    public SlotResponseDto toDto(ParkingSlot slot) {
        SlotResponseDto dto = new SlotResponseDto();
        dto.setId(slot.getId());
        dto.setSlotNumber(slot.getSlotNumber());
        dto.setStatus(slot.getStatus().name());
        return dto;
    }

}
```

---

### <a id="📄-src-main-java-com-parkease-util-usermapper-java"></a>📄 `src/main/java/com/parkease/util/UserMapper.java`

**File Info:**
- **Size**: 1.09 KB
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/util/UserMapper.java`
- **Relative Path**: `src/main/java/com/parkease/util`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-18 20:12:43 (Asia/Calcutta / GMT+06:30)
- **MD5**: `42a4c1226e27559d1409383243533e6c`
- **SHA256**: `acf187e2d37f7ae65b49c450ff0a6747ba2bb767c44dbd7c9d197dc7e2f6097e`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease.util;

import java.util.stream.Collectors;

import org.springframework.security.crypto.password.PasswordEncoder;

import com.parkease.dto.request.RegisterRequest;
import com.parkease.dto.response.UserResponseDto;
import com.parkease.entity.Role;
import com.parkease.entity.User;

public class UserMapper {

    public static User toUser(RegisterRequest dto, PasswordEncoder passwordEncoder) {
        if (dto == null) return null;

        User user = new User();
        user.setName(dto.name());
        user.setEmail(dto.email());
        user.setPassword(passwordEncoder.encode(dto.password()));
        user.setPhone(dto.phone());
        
        return user;
    }

    public static UserResponseDto toUserResponseDto(User user) {
        if (user == null) return null;

        return new UserResponseDto(
                user.getId().intValue(),
                user.getName(),
                user.getEmail(),
                user.getPhone(),
                user.getRoles().stream().map(Role::getName).collect(Collectors.toList())
        );
    }
}
```

---

### <a id="📄-src-main-java-com-parkease-parkeaseapplication-java"></a>📄 `src/main/java/com/parkease/ParkEaseApplication.java`

**File Info:**
- **Size**: 475 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/main/java/com/parkease/ParkEaseApplication.java`
- **Relative Path**: `src/main/java/com/parkease`
- **Created**: 2026-01-26 00:29:45 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-27 08:08:30 (Asia/Calcutta / GMT+06:30)
- **MD5**: `8e079b3a70a71950cc68de421e2c1d16`
- **SHA256**: `89a11c698cb032fdc36d8b50647cf66526d3facfa0364b4d6dc6761681f6fa8b`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing // listens to entities that uses @CreatedDate @LastModifiedDate 
public class ParkEaseApplication {
	public static void main(String[] args) {
		SpringApplication.run(ParkEaseApplication.class, args);
	}
}

```

---

### <a id="📄-src-main-resources-meta-inf-additional-spring-configuration-metadata-json"></a>📄 `src/main/resources/META-INF/additional-spring-configuration-metadata.json`

**File Info:**
- **Size**: 0 B
- **Extension**: `.json`
- **Language**: `json`
- **Location**: `src/main/resources/META-INF/additional-spring-configuration-metadata.json`
- **Relative Path**: `src/main/resources/META-INF`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-23 11:01:25 (Asia/Calcutta / GMT+06:30)
- **MD5**: `d41d8cd98f00b204e9800998ecf8427e`
- **SHA256**: `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`
- **Encoding**: ASCII

**File code content:**

```json

```

---

### <a id="📄-src-main-resources-application-properties"></a>📄 `src/main/resources/application.properties`

**File Info:**
- **Size**: 3.5 KB
- **Extension**: `.properties`
- **Language**: `text`
- **Location**: `src/main/resources/application.properties`
- **Relative Path**: `src/main/resources`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-27 12:02:48 (Asia/Calcutta / GMT+06:30)
- **MD5**: `b63cdf975770ee7c502788db7da51f69`
- **SHA256**: `14a14509467013e14806e6970de18bd91d39f3704a28153c38a1b85ba8866d73`
- **Encoding**: ASCII

**File code content:**

```text
# ============================================
# PARKEASE APPLICATION CONFIGURATION
# ============================================

# Basic Application Settings
spring.application.name=parkease
server.port=8080
server.servlet.context-path=/api

# ============================================
# DATABASE CONFIGURATION
# ============================================
spring.datasource.url=jdbc:postgresql://localhost:5432/parke
spring.datasource.username=postgres
spring.datasource.password=aaaa
spring.datasource.driver-class-name=org.postgresql.Driver

# Connection Pool
spring.datasource.hikari.connection-timeout=20000
spring.datasource.hikari.maximum-pool-size=10
spring.datasource.hikari.minimum-idle=5

# ============================================
# JPA / HIBERNATE CONFIGURATION
# ============================================
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.open-in-view=false

# ============================================
# SECURITY CONFIGURATION
# ============================================
JWT_SECRET=cGFya2Vhc2VTdXBlclNlY3VyZUp3dFNlY3JldEtleTIwMjZGb3JQcm9kdWN0aW9uVXNl
JWT_EXPIRATION_HOURS=24

# ============================================
# EMAIL CONFIGURATION (DEMO MODE)
# ============================================
email.demo-mode=true
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=demo@parkease.com
spring.mail.password=demo_password

# ============================================
# DEMO DATA SEEDING
# ============================================
demo.data.enabled=true
demo.data.users.count=10
demo.data.zones.count=4
demo.data.slots.per-zone=20
demo.data.reservations.count=50

# ============================================
# FILE HANDLING
# ============================================
file.qrcode-dir=./qrcodes
file.upload-dir=./uploads
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=10MB

# ============================================
# DEMO PAYMENT CONFIGURATION
# ============================================
payment.demo-mode=true
payment.currency=INR
payment.tax-percentage=18.0

# ============================================
# PRICING DEFAULTS
# ============================================
parking.price.hourly.default=50
parking.price.two-wheeler=30
parking.price.hatchback=50
parking.price.suv=70

# ============================================
# CORS CONFIGURATION
# ============================================
cors.allowed-origins=http://localhost:5173,http://localhost:3000
cors.allowed-methods=GET,POST,PUT,DELETE,OPTIONS
cors.allowed-headers=*
cors.allow-credentials=true

# ============================================
# LOGGING CONFIGURATION
# ============================================
logging.level.com.parkease=DEBUG
logging.level.org.springframework.security=INFO
logging.level.org.springframework.web=INFO
logging.level.org.hibernate=WARN

logging.file.name=logs/parkease.log
logging.file.max-size=10MB
logging.pattern.console=%d{HH:mm:ss} %-5level %logger{36} - %msg%n

# ============================================
# ERROR HANDLING
# ============================================
server.error.include-stacktrace=never
server.error.include-message=always

# ============================================
# PROFILES
# ============================================
spring.profiles.active=dev

```

---

### <a id="📄-src-test-java-com-parkease-parkeaseapplicationtests-java"></a>📄 `src/test/java/com/parkease/ParkEaseApplicationTests.java`

**File Info:**
- **Size**: 217 B
- **Extension**: `.java`
- **Language**: `java`
- **Location**: `src/test/java/com/parkease/ParkEaseApplicationTests.java`
- **Relative Path**: `src/test/java/com/parkease`
- **Created**: 2026-01-26 00:29:46 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-26 07:02:07 (Asia/Calcutta / GMT+06:30)
- **MD5**: `6387911c0ee525f9a723380a3ddee2d8`
- **SHA256**: `a67832c668dbedd4f54029d6eacf63bb9a5aed05b2675a97b3f151dcc0f40e03`
- **Encoding**: ASCII

**File code content:**

```java
package com.parkease;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ParkEaseApplicationTests {

	@Test
	void contextLoads() {
	}

}
```

---

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `target/classes/com/parkease/config/CorsConfig.class`
- `target/classes/com/parkease/config/EmailConfig.class`
- `target/classes/com/parkease/config/SchedulerConfig.class`
- `target/classes/com/parkease/config/WebSocketConfig.class`

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `target/classes/com/parkease/controller/AdminController.class`
- `target/classes/com/parkease/controller/AuthController.class`
- `target/classes/com/parkease/controller/DemoPaymentController.class`
- `target/classes/com/parkease/controller/HealthController.class`
- `target/classes/com/parkease/controller/ParkingSlotController.class`
- `target/classes/com/parkease/controller/PaymentController.class`
- `target/classes/com/parkease/controller/PricingController.class`
- `target/classes/com/parkease/controller/TestController.class`
- `target/classes/com/parkease/controller/UserController.class`
- `target/classes/com/parkease/controller/WebSocketController.class`

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `target/classes/com/parkease/dto/request/ForgotPasswordRequest.class`
- `target/classes/com/parkease/dto/request/LoginRequest.class`
- `target/classes/com/parkease/dto/request/ParkingZoneDto.class`
- `target/classes/com/parkease/dto/request/PaymentRequest.class`
- `target/classes/com/parkease/dto/request/RegisterRequest.class`
- `target/classes/com/parkease/dto/request/ReservationRequest.class`
- `target/classes/com/parkease/dto/request/ResetPasswordRequest.class`
- `target/classes/com/parkease/dto/request/SlotDto.class`
- `target/classes/com/parkease/dto/request/UpdateProfileRequest.class`
- `target/classes/com/parkease/dto/request/VehicleDto.class`

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `target/classes/com/parkease/dto/response/AdminStatsResponse.class`
- `target/classes/com/parkease/dto/response/LoginResponse.class`
- `target/classes/com/parkease/dto/response/ParkingZoneResponseDto.class`
- `target/classes/com/parkease/dto/response/RegisterUserResponseDto.class`
- `target/classes/com/parkease/dto/response/ReservationResponseDto.class`
- `target/classes/com/parkease/dto/response/SlotResponseDto.class`
- `target/classes/com/parkease/dto/response/UserResponseDto.class`
- `target/classes/com/parkease/dto/response/VehicleResponseDto.class`

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `target/classes/com/parkease/dto/websocket/ReservationUpdate.class`
- `target/classes/com/parkease/dto/websocket/SlotStatusUpdate.class`

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `target/classes/com/parkease/dto/AdminStatsResponse.class`

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `target/classes/com/parkease/entity/BasePrice.class`
- `target/classes/com/parkease/entity/ParkingSlot.class`
- `target/classes/com/parkease/entity/ParkingSlot$SlotStatus.class`
- `target/classes/com/parkease/entity/ParkingZone.class`
- `target/classes/com/parkease/entity/PaymentTransaction.class`
- `target/classes/com/parkease/entity/PaymentTransaction$PaymentStatus.class`
- `target/classes/com/parkease/entity/Reservation.class`
- `target/classes/com/parkease/entity/Reservation$ReservationStatus.class`
- `target/classes/com/parkease/entity/Role.class`
- `target/classes/com/parkease/entity/User.class`
- `target/classes/com/parkease/entity/Vehicle.class`

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `target/classes/com/parkease/enums/SlotStatus.class`
- `target/classes/com/parkease/enums/VehicleType.class`

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `target/classes/com/parkease/exception/BadRequestException.class`
- `target/classes/com/parkease/exception/GlobalExceptionHandler.class`
- `target/classes/com/parkease/exception/ResourceNotFoundException.class`

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `target/classes/com/parkease/repository/BasePriceRepository.class`
- `target/classes/com/parkease/repository/ParkingSlotRepository.class`
- `target/classes/com/parkease/repository/ParkingZoneRepository.class`
- `target/classes/com/parkease/repository/PaymentTransactionRepository.class`
- `target/classes/com/parkease/repository/ReservationRepository.class`
- `target/classes/com/parkease/repository/RoleRepository.class`
- `target/classes/com/parkease/repository/UserRepository.class`

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `target/classes/com/parkease/scheduler/ReservationExpiryScheduler.class`

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `target/classes/com/parkease/security/CustomUserDetails.class`
- `target/classes/com/parkease/security/JwtAuthenticationFilter.class`
- `target/classes/com/parkease/security/JwtUtil.class`
- `target/classes/com/parkease/security/SecurityConfig.class`

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `target/classes/com/parkease/seeder/AdminSeeder.class`
- `target/classes/com/parkease/seeder/DemoDataSeeder.class`
- `target/classes/com/parkease/seeder/RoleSeeder.class`

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `target/classes/com/parkease/service/AdminAnalyticsService.class`
- `target/classes/com/parkease/service/AuthService.class`
- `target/classes/com/parkease/service/CustomUserDetailsService.class`
- `target/classes/com/parkease/service/DemoPaymentService.class`
- `target/classes/com/parkease/service/DemoPaymentServiceImpl.class`
- `target/classes/com/parkease/service/EmailService.class`
- `target/classes/com/parkease/service/ParkingSlotService.class`
- `target/classes/com/parkease/service/ParkingZoneService.class`
- `target/classes/com/parkease/service/PaymentService.class`
- `target/classes/com/parkease/service/PricingService.class`
- `target/classes/com/parkease/service/QRCodeService.class`
- `target/classes/com/parkease/service/ReservationService.class`
- `target/classes/com/parkease/service/UserService.class`

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `target/classes/com/parkease/specification/ReservationSpecs.class`

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `target/classes/com/parkease/util/ParkingZoneMapper.class`
- `target/classes/com/parkease/util/ReservationMapper.class`
- `target/classes/com/parkease/util/SlotMapper.class`
- `target/classes/com/parkease/util/UserMapper.class`

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `target/classes/com/parkease/ParkEaseApplication.class`

### <a id="📄-target-classes-meta-inf-additional-spring-configuration-metadata-json"></a>📄 `target/classes/META-INF/additional-spring-configuration-metadata.json`

**File Info:**
- **Size**: 0 B
- **Extension**: `.json`
- **Language**: `json`
- **Location**: `target/classes/META-INF/additional-spring-configuration-metadata.json`
- **Relative Path**: `target/classes/META-INF`
- **Created**: 2026-01-27 08:03:16 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-23 11:01:25 (Asia/Calcutta / GMT+06:30)
- **MD5**: `d41d8cd98f00b204e9800998ecf8427e`
- **SHA256**: `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`
- **Encoding**: ASCII

**File code content:**

```json

```

---

### <a id="📄-target-classes-application-properties"></a>📄 `target/classes/application.properties`

**File Info:**
- **Size**: 3.5 KB
- **Extension**: `.properties`
- **Language**: `text`
- **Location**: `target/classes/application.properties`
- **Relative Path**: `target/classes`
- **Created**: 2026-01-27 12:02:54 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-27 12:02:55 (Asia/Calcutta / GMT+06:30)
- **MD5**: `b63cdf975770ee7c502788db7da51f69`
- **SHA256**: `14a14509467013e14806e6970de18bd91d39f3704a28153c38a1b85ba8866d73`
- **Encoding**: ASCII

**File code content:**

```text
# ============================================
# PARKEASE APPLICATION CONFIGURATION
# ============================================

# Basic Application Settings
spring.application.name=parkease
server.port=8080
server.servlet.context-path=/api

# ============================================
# DATABASE CONFIGURATION
# ============================================
spring.datasource.url=jdbc:postgresql://localhost:5432/parke
spring.datasource.username=postgres
spring.datasource.password=aaaa
spring.datasource.driver-class-name=org.postgresql.Driver

# Connection Pool
spring.datasource.hikari.connection-timeout=20000
spring.datasource.hikari.maximum-pool-size=10
spring.datasource.hikari.minimum-idle=5

# ============================================
# JPA / HIBERNATE CONFIGURATION
# ============================================
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.open-in-view=false

# ============================================
# SECURITY CONFIGURATION
# ============================================
JWT_SECRET=cGFya2Vhc2VTdXBlclNlY3VyZUp3dFNlY3JldEtleTIwMjZGb3JQcm9kdWN0aW9uVXNl
JWT_EXPIRATION_HOURS=24

# ============================================
# EMAIL CONFIGURATION (DEMO MODE)
# ============================================
email.demo-mode=true
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=demo@parkease.com
spring.mail.password=demo_password

# ============================================
# DEMO DATA SEEDING
# ============================================
demo.data.enabled=true
demo.data.users.count=10
demo.data.zones.count=4
demo.data.slots.per-zone=20
demo.data.reservations.count=50

# ============================================
# FILE HANDLING
# ============================================
file.qrcode-dir=./qrcodes
file.upload-dir=./uploads
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=10MB

# ============================================
# DEMO PAYMENT CONFIGURATION
# ============================================
payment.demo-mode=true
payment.currency=INR
payment.tax-percentage=18.0

# ============================================
# PRICING DEFAULTS
# ============================================
parking.price.hourly.default=50
parking.price.two-wheeler=30
parking.price.hatchback=50
parking.price.suv=70

# ============================================
# CORS CONFIGURATION
# ============================================
cors.allowed-origins=http://localhost:5173,http://localhost:3000
cors.allowed-methods=GET,POST,PUT,DELETE,OPTIONS
cors.allowed-headers=*
cors.allow-credentials=true

# ============================================
# LOGGING CONFIGURATION
# ============================================
logging.level.com.parkease=DEBUG
logging.level.org.springframework.security=INFO
logging.level.org.springframework.web=INFO
logging.level.org.hibernate=WARN

logging.file.name=logs/parkease.log
logging.file.max-size=10MB
logging.pattern.console=%d{HH:mm:ss} %-5level %logger{36} - %msg%n

# ============================================
# ERROR HANDLING
# ============================================
server.error.include-stacktrace=never
server.error.include-message=always

# ============================================
# PROFILES
# ============================================
spring.profiles.active=dev

```

---

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `target/test-classes/com/parkease/ParkEaseApplicationTests.class`

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `uploads/qrcodes/qrcode_garage1_slot1.png`

### <a id="📄-mvnw-cmd"></a>📄 `mvnw.cmd`

**File Info:**
- **Size**: 6.9 KB
- **Extension**: `.cmd`
- **Language**: `batch`
- **Location**: `mvnw.cmd`
- **Relative Path**: `root`
- **Created**: 2026-01-26 00:29:42 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-13 09:19:36 (Asia/Calcutta / GMT+06:30)
- **MD5**: `897fa1eacd54bea7a9ca635b53564216`
- **SHA256**: `3dc8d558cc15e5051a9ef3778099c6a8bcd83320ba0383ece14811194d08d730`
- **Encoding**: ASCII

**File code content:**

```batch
<# : batch portion
@REM ----------------------------------------------------------------------------
@REM Licensed to the Apache Software Foundation (ASF) under one
@REM or more contributor license agreements.  See the NOTICE file
@REM distributed with this work for additional information
@REM regarding copyright ownership.  The ASF licenses this file
@REM to you under the Apache License, Version 2.0 (the
@REM "License"); you may not use this file except in compliance
@REM with the License.  You may obtain a copy of the License at
@REM
@REM    http://www.apache.org/licenses/LICENSE-2.0
@REM
@REM Unless required by applicable law or agreed to in writing,
@REM software distributed under the License is distributed on an
@REM "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
@REM KIND, either express or implied.  See the License for the
@REM specific language governing permissions and limitations
@REM under the License.
@REM ----------------------------------------------------------------------------

@REM ----------------------------------------------------------------------------
@REM Apache Maven Wrapper startup batch script, version 3.3.2
@REM
@REM Optional ENV vars
@REM   MVNW_REPOURL - repo url base for downloading maven distribution
@REM   MVNW_USERNAME/MVNW_PASSWORD - user and password for downloading maven
@REM   MVNW_VERBOSE - true: enable verbose log; others: silence the output
@REM ----------------------------------------------------------------------------

@IF "%__MVNW_ARG0_NAME__%"=="" (SET __MVNW_ARG0_NAME__=%~nx0)
@SET __MVNW_CMD__=
@SET __MVNW_ERROR__=
@SET __MVNW_PSMODULEP_SAVE=%PSModulePath%
@SET PSModulePath=
@FOR /F "usebackq tokens=1* delims==" %%A IN (`powershell -noprofile "& {$scriptDir='%~dp0'; $script='%__MVNW_ARG0_NAME__%'; icm -ScriptBlock ([Scriptblock]::Create((Get-Content -Raw '%~f0'))) -NoNewScope}"`) DO @(
  IF "%%A"=="MVN_CMD" (set __MVNW_CMD__=%%B) ELSE IF "%%B"=="" (echo %%A) ELSE (echo %%A=%%B)
)
@SET PSModulePath=%__MVNW_PSMODULEP_SAVE%
@SET __MVNW_PSMODULEP_SAVE=
@SET __MVNW_ARG0_NAME__=
@SET MVNW_USERNAME=
@SET MVNW_PASSWORD=
@IF NOT "%__MVNW_CMD__%"=="" (%__MVNW_CMD__% %*)
@echo Cannot start maven from wrapper >&2 && exit /b 1
@GOTO :EOF
: end batch / begin powershell #>

$ErrorActionPreference = "Stop"
if ($env:MVNW_VERBOSE -eq "true") {
  $VerbosePreference = "Continue"
}

# calculate distributionUrl, requires .mvn/wrapper/maven-wrapper.properties
$distributionUrl = (Get-Content -Raw "$scriptDir/.mvn/wrapper/maven-wrapper.properties" | ConvertFrom-StringData).distributionUrl
if (!$distributionUrl) {
  Write-Error "cannot read distributionUrl property in $scriptDir/.mvn/wrapper/maven-wrapper.properties"
}

switch -wildcard -casesensitive ( $($distributionUrl -replace '^.*/','') ) {
  "maven-mvnd-*" {
    $USE_MVND = $true
    $distributionUrl = $distributionUrl -replace '-bin\.[^.]*$',"-windows-amd64.zip"
    $MVN_CMD = "mvnd.cmd"
    break
  }
  default {
    $USE_MVND = $false
    $MVN_CMD = $script -replace '^mvnw','mvn'
    break
  }
}

# apply MVNW_REPOURL and calculate MAVEN_HOME
# maven home pattern: ~/.m2/wrapper/dists/{apache-maven-<version>,maven-mvnd-<version>-<platform>}/<hash>
if ($env:MVNW_REPOURL) {
  $MVNW_REPO_PATTERN = if ($USE_MVND) { "/org/apache/maven/" } else { "/maven/mvnd/" }
  $distributionUrl = "$env:MVNW_REPOURL$MVNW_REPO_PATTERN$($distributionUrl -replace '^.*'+$MVNW_REPO_PATTERN,'')"
}
$distributionUrlName = $distributionUrl -replace '^.*/',''
$distributionUrlNameMain = $distributionUrlName -replace '\.[^.]*$','' -replace '-bin$',''
$MAVEN_HOME_PARENT = "$HOME/.m2/wrapper/dists/$distributionUrlNameMain"
if ($env:MAVEN_USER_HOME) {
  $MAVEN_HOME_PARENT = "$env:MAVEN_USER_HOME/wrapper/dists/$distributionUrlNameMain"
}
$MAVEN_HOME_NAME = ([System.Security.Cryptography.MD5]::Create().ComputeHash([byte[]][char[]]$distributionUrl) | ForEach-Object {$_.ToString("x2")}) -join ''
$MAVEN_HOME = "$MAVEN_HOME_PARENT/$MAVEN_HOME_NAME"

if (Test-Path -Path "$MAVEN_HOME" -PathType Container) {
  Write-Verbose "found existing MAVEN_HOME at $MAVEN_HOME"
  Write-Output "MVN_CMD=$MAVEN_HOME/bin/$MVN_CMD"
  exit $?
}

if (! $distributionUrlNameMain -or ($distributionUrlName -eq $distributionUrlNameMain)) {
  Write-Error "distributionUrl is not valid, must end with *-bin.zip, but found $distributionUrl"
}

# prepare tmp dir
$TMP_DOWNLOAD_DIR_HOLDER = New-TemporaryFile
$TMP_DOWNLOAD_DIR = New-Item -Itemtype Directory -Path "$TMP_DOWNLOAD_DIR_HOLDER.dir"
$TMP_DOWNLOAD_DIR_HOLDER.Delete() | Out-Null
trap {
  if ($TMP_DOWNLOAD_DIR.Exists) {
    try { Remove-Item $TMP_DOWNLOAD_DIR -Recurse -Force | Out-Null }
    catch { Write-Warning "Cannot remove $TMP_DOWNLOAD_DIR" }
  }
}

New-Item -Itemtype Directory -Path "$MAVEN_HOME_PARENT" -Force | Out-Null

# Download and Install Apache Maven
Write-Verbose "Couldn't find MAVEN_HOME, downloading and installing it ..."
Write-Verbose "Downloading from: $distributionUrl"
Write-Verbose "Downloading to: $TMP_DOWNLOAD_DIR/$distributionUrlName"

$webclient = New-Object System.Net.WebClient
if ($env:MVNW_USERNAME -and $env:MVNW_PASSWORD) {
  $webclient.Credentials = New-Object System.Net.NetworkCredential($env:MVNW_USERNAME, $env:MVNW_PASSWORD)
}
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$webclient.DownloadFile($distributionUrl, "$TMP_DOWNLOAD_DIR/$distributionUrlName") | Out-Null

# If specified, validate the SHA-256 sum of the Maven distribution zip file
$distributionSha256Sum = (Get-Content -Raw "$scriptDir/.mvn/wrapper/maven-wrapper.properties" | ConvertFrom-StringData).distributionSha256Sum
if ($distributionSha256Sum) {
  if ($USE_MVND) {
    Write-Error "Checksum validation is not supported for maven-mvnd. `nPlease disable validation by removing 'distributionSha256Sum' from your maven-wrapper.properties."
  }
  Import-Module $PSHOME\Modules\Microsoft.PowerShell.Utility -Function Get-FileHash
  if ((Get-FileHash "$TMP_DOWNLOAD_DIR/$distributionUrlName" -Algorithm SHA256).Hash.ToLower() -ne $distributionSha256Sum) {
    Write-Error "Error: Failed to validate Maven distribution SHA-256, your Maven distribution might be compromised. If you updated your Maven version, you need to update the specified distributionSha256Sum property."
  }
}

# unzip and move
Expand-Archive "$TMP_DOWNLOAD_DIR/$distributionUrlName" -DestinationPath "$TMP_DOWNLOAD_DIR" | Out-Null
Rename-Item -Path "$TMP_DOWNLOAD_DIR/$distributionUrlNameMain" -NewName $MAVEN_HOME_NAME | Out-Null
try {
  Move-Item -Path "$TMP_DOWNLOAD_DIR/$MAVEN_HOME_NAME" -Destination $MAVEN_HOME_PARENT | Out-Null
} catch {
  if (! (Test-Path -Path "$MAVEN_HOME" -PathType Container)) {
    Write-Error "fail to move MAVEN_HOME"
  }
} finally {
  try { Remove-Item $TMP_DOWNLOAD_DIR -Recurse -Force | Out-Null }
  catch { Write-Warning "Cannot remove $TMP_DOWNLOAD_DIR" }
}

Write-Output "MVN_CMD=$MAVEN_HOME/bin/$MVN_CMD"

```

---

### <a id="📄-parkease-postman-collection-json"></a>📄 `ParkEase_Postman_Collection.json`

**File Info:**
- **Size**: 23.18 KB
- **Extension**: `.json`
- **Language**: `json`
- **Location**: `ParkEase_Postman_Collection.json`
- **Relative Path**: `root`
- **Created**: 2026-01-26 00:29:42 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-27 08:37:10 (Asia/Calcutta / GMT+06:30)
- **MD5**: `37a8236e3ed7464a0ca628e26252339d`
- **SHA256**: `44b3576688611d19461b008cca82e3dc81510fbc15b5b019de64de419aeb66ff`
- **Encoding**: UTF-8

**File code content:**

```json
{
	"info": {
		"_postman_id": "b5a7c8d9-e0f1-4a2b-c3d4-e5f6a7b8c9d0",
		"name": "🚗 ParkEase API - Complete Collection",
		"description": "Comprehensive API collection for ParkEase Parking Management System.\n\n**Features:**\n- JWT Authentication\n- User & Admin Operations\n- Parking Zone & Slot Management\n- Reservations\n- Demo Payment Integration\n- Pricing Management\n- Analytics\n\n**Base URL:** http://localhost:8080/api\n**Demo Credentials:**\n- Admin: admin@parkease.com / password123\n- User: user@example.com / password123",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "🔐 Authentication",
			"description": "User registration, login, password reset, and profile management",
			"item": [
				{
					"name": "Register New User",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name\": \"John Doe\",\n    \"email\": \"john.doe@example.com\",\n    \"password\": \"password123\",\n    \"phone\": \"1234567890\"\n}"
						},
						"url": {
							"raw": "{{base_url}}/auth/register",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"auth",
								"register"
							]
						},
						"description": "Register a new user account. Returns user details and JWT token."
					}
				},
				{
					"name": "Login",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"if (pm.response.code === 200) {",
									"    const jsonData = pm.response.json();",
									"    if (jsonData.token) {",
									"        pm.collectionVariables.set('token', jsonData.token);",
									"        console.log('✅ Token saved:', jsonData.token.substring(0, 20) + '...');",
									"    }",
									"}"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"email\": \"admin@parkease.com\",\n    \"password\": \"password123\"\n}"
						},
						"url": {
							"raw": "{{base_url}}/auth/login",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"auth",
								"login"
							]
						},
						"description": "Login with email and password. Returns JWT token that auto-saves to collection variable."
					}
				},
				{
					"name": "Login as Admin",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"if (pm.response.code === 200) {",
									"    const jsonData = pm.response.json();",
									"    if (jsonData.token) {",
									"        pm.collectionVariables.set('token', jsonData.token);",
									"        console.log('✅ Admin Token saved');",
									"    }",
									"}"
								]
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"email\": \"admin@parkease.com\",\n    \"password\": \"password123\"\n}"
						},
						"url": {
							"raw": "{{base_url}}/auth/login",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"auth",
								"login"
							]
						}
					}
				},
				{
					"name": "Forgot Password",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"email\": \"john.doe@example.com\"\n}"
						},
						"url": {
							"raw": "{{base_url}}/auth/forgot-password",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"auth",
								"forgot-password"
							]
						},
						"description": "Request password reset email"
					}
				},
				{
					"name": "Reset Password",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"token\": \"reset_token_here\",\n    \"newPassword\": \"newPassword123\"\n}"
						},
						"url": {
							"raw": "{{base_url}}/auth/reset-password",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"auth",
								"reset-password"
							]
						}
					}
				},
				{
					"name": "Get User Profile",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"url": {
							"raw": "{{base_url}}/auth/profile",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"auth",
								"profile"
							]
						},
						"description": "Get current user profile information"
					}
				},
				{
					"name": "Update Profile",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							},
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name\": \"John Updated\",\n    \"phone\": \"9876543210\"\n}"
						},
						"url": {
							"raw": "{{base_url}}/auth/profile",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"auth",
								"profile"
							]
						}
					}
				}
			]
		},
		{
			"name": "👤 User Operations",
			"description": "User-facing parking, reservation, and search operations",
			"item": [
				{
					"name": "Get Parking Zones",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"url": {
							"raw": "{{base_url}}/user/zones",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"user",
								"zones"
							]
						},
						"description": "Get all available parking zones"
					}
				},
				{
					"name": "Get Zones by Location",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"url": {
							"raw": "{{base_url}}/user/zones?location=Downtown",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"user",
								"zones"
							],
							"query": [
								{
									"key": "location",
									"value": "Downtown"
								}
							]
						}
					}
				},
				{
					"name": "Get Available Slots by Zone",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"url": {
							"raw": "{{base_url}}/user/slots?zoneId=1",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"user",
								"slots"
							],
							"query": [
								{
									"key": "zoneId",
									"value": "1"
								}
							]
						},
						"description": "Get all available slots for a specific parking zone"
					}
				},
				{
					"name": "Get Slots by Zone Name",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"url": {
							"raw": "{{base_url}}/user/zones/Central Parking/slots",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"user",
								"zones",
								"Central Parking",
								"slots"
							]
						}
					}
				},
				{
					"name": "Calculate Price",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"url": {
							"raw": "{{base_url}}/user/price?vehicleType=HATCHBACK&hours=2",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"user",
								"price"
							],
							"query": [
								{
									"key": "vehicleType",
									"value": "HATCHBACK",
									"description": "TWO_WHEELER, HATCHBACK, SEDAN, SUV"
								},
								{
									"key": "hours",
									"value": "2"
								}
							]
						},
						"description": "Calculate parking price for specific vehicle type and duration"
					}
				},
				{
					"name": "Create Reservation",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							},
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"slotId\": 1,\n    \"startTime\": \"2026-01-26T10:00:00\",\n    \"endTime\": \"2026-01-26T12:00:00\",\n    \"vehicleType\": \"HATCHBACK\",\n    \"vehicleNumber\": \"KA01AB1234\"\n}"
						},
						"url": {
							"raw": "{{base_url}}/user/reserve",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"user",
								"reserve"
							]
						},
						"description": "Create a new parking reservation"
					}
				},
				{
					"name": "Get My Reservations",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"url": {
							"raw": "{{base_url}}/user/reservations",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"user",
								"reservations"
							]
						},
						"description": "Get all reservations for current user"
					}
				},
				{
					"name": "Get History",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"url": {
							"raw": "{{base_url}}/user/history",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"user",
								"history"
							]
						},
						"description": "Get reservation history"
					}
				},
				{
					"name": "Cancel Reservation",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"url": {
							"raw": "{{base_url}}/user/cancel/1",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"user",
								"cancel",
								"1"
							]
						},
						"description": "Cancel a reservation by ID"
					}
				}
			]
		},
		{
			"name": "👨‍💼 Admin - Zones",
			"description": "Admin operations for parking zone management",
			"item": [
				{
					"name": "Get All Zones (Admin)",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"url": {
							"raw": "{{base_url}}/admin/zones",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"admin",
								"zones"
							]
						}
					}
				},
				{
					"name": "Create Parking Zone",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							},
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name\": \"North Parking\",\n    \"location\": \"North Zone\",\n    \"capacity\": 50,\n    \"isActive\": true\n}"
						},
						"url": {
							"raw": "{{base_url}}/admin/zone",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"admin",
								"zone"
							]
						}
					}
				},
				{
					"name": "Update Zone",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							},
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name\": \"Updated Zone Name\",\n    \"location\": \"Updated Location\",\n    \"capacity\": 60,\n    \"isActive\": true\n}"
						},
						"url": {
							"raw": "{{base_url}}/admin/zones/1",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"admin",
								"zones",
								"1"
							]
						}
					}
				},
				{
					"name": "Delete Zone",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"url": {
							"raw": "{{base_url}}/admin/zones/1",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"admin",
								"zones",
								"1"
							]
						}
					}
				}
			]
		},
		{
			"name": "👨‍💼 Admin - Slots",
			"description": "Admin operations for parking slot management",
			"item": [
				{
					"name": "Get Slots by Zone",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"url": {
							"raw": "{{base_url}}/admin/slots/1",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"admin",
								"slots",
								"1"
							]
						},
						"description": "Get all slots for a specific zone"
					}
				},
				{
					"name": "Create Slot",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"url": {
							"raw": "{{base_url}}/admin/slots/1",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"admin",
								"slots",
								"1"
							]
						},
						"description": "Create a new slot in zone (auto-generates slot number and QR code)"
					}
				},
				{
					"name": "Update Slot Status",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"url": {
							"raw": "{{base_url}}/admin/slots/1/status?status=AVAILABLE",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"admin",
								"slots",
								"1",
								"status"
							],
							"query": [
								{
									"key": "status",
									"value": "AVAILABLE",
									"description": "AVAILABLE, OCCUPIED, RESERVED, MAINTENANCE"
								}
							]
						}
					}
				}
			]
		},
		{
			"name": "👨‍💼 Admin - Pricing",
			"description": "Admin pricing management",
			"item": [
				{
					"name": "Get All Prices",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"url": {
							"raw": "{{base_url}}/admin/pricing",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"admin",
								"pricing"
							]
						}
					}
				},
				{
					"name": "Update Price",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							},
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"vehicleType\": \"HATCHBACK\",\n    \"pricePerHour\": 60.0\n}"
						},
						"url": {
							"raw": "{{base_url}}/admin/pricing/1",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"admin",
								"pricing",
								"1"
							]
						}
					}
				}
			]
		},
		{
			"name": "👨‍💼 Admin - Analytics",
			"description": "Admin dashboard and analytics",
			"item": [
				{
					"name": "Get Reports",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"url": {
							"raw": "{{base_url}}/admin/reports",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"admin",
								"reports"
							]
						},
						"description": "Get comprehensive admin analytics and reports"
					}
				}
			]
		},
		{
			"name": "💳 Payment Integration (Main)",
			"description": "Main payment integration endpoints",
			"item": [
				{
					"name": "Initiate Payment",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"reservationId\": 1,\n    \"amount\": 100.0,\n    \"paymentMode\": \"ONLINE\"\n}"
						},
						"url": {
							"raw": "{{base_url}}/payment/initiate",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"payment",
								"initiate"
							]
						}
					}
				},
				{
					"name": "Confirm Payment (Demo)",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"reservationId\": 1,\n    \"amount\": 100.0,\n    \"paymentMode\": \"ONLINE\"\n}"
						},
						"url": {
							"raw": "{{base_url}}/payment/demo",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"payment",
								"demo"
							]
						}
					}
				},
				{
					"name": "Simulate Payment",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"scenario\": \"success\",\n    \"amount\": 100.0\n}"
						},
						"url": {
							"raw": "{{base_url}}/payment/simulate",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"payment",
								"simulate"
							]
						}
					}
				}
			]
		},
		{
			"name": "🔧 Demo Controller (Utils)",
			"description": "Low-level demo payment utilities",
			"item": [
				{
					"name": "Get Payment Mode",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{base_url}}/payment/demo-controller/mode",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"payment",
								"demo-controller",
								"mode"
							]
						},
						"description": "Check if demo mode is enabled"
					}
				},
				{
					"name": "Get Demo Instructions",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{base_url}}/payment/demo-controller/instructions",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"payment",
								"demo-controller",
								"instructions"
							]
						}
					}
				},
				{
					"name": "Create Demo Order",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"amount\": 150.0,\n    \"description\": \"Parking Reservation Payment\"\n}"
						},
						"url": {
							"raw": "{{base_url}}/payment/demo-controller/create-order",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"payment",
								"demo-controller",
								"create-order"
							]
						}
					}
				},
				{
					"name": "Verify Demo Payment",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"orderId\": \"order_demo_12345\",\n    \"paymentId\": \"pay_demo_67890\",\n    \"signature\": \"demo_signature_abc123\"\n}"
						},
						"url": {
							"raw": "{{base_url}}/payment/demo-controller/verify",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"payment",
								"demo-controller",
								"verify"
							]
						}
					}
				},
				{
					"name": "Get Payment Status",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{base_url}}/payment/demo-controller/status/pay_demo_12345",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"payment",
								"demo-controller",
								"status",
								"pay_demo_12345"
							]
						}
					}
				},
				{
					"name": "Get Demo Receipt",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{base_url}}/payment/demo-controller/receipt/pay_demo_12345?amount=150.0",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"payment",
								"demo-controller",
								"receipt",
								"pay_demo_12345"
							],
							"query": [
								{
									"key": "amount",
									"value": "150.0"
								}
							]
						}
					}
				},
				{
					"name": "Simulate Payment Webhook",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"event\": \"payment.captured\",\n    \"paymentId\": \"pay_demo_12345\",\n    \"orderId\": \"order_demo_67890\",\n    \"amount\": 150.0,\n    \"status\": \"success\"\n}"
						},
						"url": {
							"raw": "{{base_url}}/payment/demo-controller/webhook/simulate",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"payment",
								"demo-controller",
								"webhook",
								"simulate"
							]
						}
					}
				}
			]
		},
		{
			"name": "🏥 Health & Diagnostics",
			"description": "System health and diagnostic endpoints",
			"item": [
				{
					"name": "Health Check",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{base_url}}/actuator/health",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"actuator",
								"health"
							]
						}
					}
				},
				{
					"name": "API Info",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{base_url}}/actuator/info",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"actuator",
								"info"
							]
						}
					}
				}
			]
		}
	],
	"variable": [
		{
			"key": "base_url",
			"value": "http://localhost:8080/api",
			"type": "string"
		},
		{
			"key": "token",
			"value": "",
			"type": "string"
		}
	]
}
```

---

### <a id="📄-pom-xml"></a>📄 `pom.xml`

**File Info:**
- **Size**: 5.51 KB
- **Extension**: `.xml`
- **Language**: `xml`
- **Location**: `pom.xml`
- **Relative Path**: `root`
- **Created**: 2026-01-26 00:29:42 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-25 23:16:21 (Asia/Calcutta / GMT+06:30)
- **MD5**: `2a7c1c79bc51762299c3533395282c5f`
- **SHA256**: `78d94ecf059ba3eb788642706857a37291e71e8724de18896ce3439c136e5150`
- **Encoding**: ASCII

**File code content:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>3.4.1</version>
		<relativePath />
	</parent>

	<groupId>com.parkease</groupId>
	<artifactId>parkease-system</artifactId>
	<name>ParkEase System</name>
	<version>0.0.1-SNAPSHOT</version>
	<description>Parking Management System</description>

	<properties>
		<java.version>21</java.version>
		<zxing.version>3.5.3</zxing.version>
	</properties>

	<dependencies>
		<!-- ====================== -->
		<!-- SPRING BOOT STARTERS -->
		<!-- ====================== -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-validation</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-mail</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-websocket</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-cache</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-actuator</artifactId>
		</dependency>

		<!-- ====================== -->
		<!-- DATABASE -->
		<!-- ====================== -->
		<dependency>
			<groupId>org.postgresql</groupId>
			<artifactId>postgresql</artifactId>
			<scope>runtime</scope>
		</dependency>

		<!-- ====================== -->
		<!-- SECURITY & JWT -->
		<!-- ====================== -->
		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt-api</artifactId>
			<version>0.12.6</version>
		</dependency>
		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt-impl</artifactId>
			<version>0.12.6</version>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt-jackson</artifactId>
			<version>0.12.6</version>
			<scope>runtime</scope>
		</dependency>
		

		<!-- ====================== -->
		<!-- METRICS (Keep only core for Actuator) -->
		<!-- ====================== -->
		<dependency>
			<groupId>io.micrometer</groupId>
			<artifactId>micrometer-core</artifactId>
		</dependency>

		<!-- ====================== -->
		<!-- QR CODE GENERATION -->
		<!-- ====================== -->
		<dependency>
			<groupId>com.google.zxing</groupId>
			<artifactId>core</artifactId>
			<version>${zxing.version}</version>
		</dependency>
		<dependency>
			<groupId>com.google.zxing</groupId>
			<artifactId>javase</artifactId>
			<version>${zxing.version}</version>
		</dependency>

		<!-- ====================== -->
		<!-- TOOLS & UTILITIES -->
		<!-- ====================== -->
		<dependency>
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
			<optional>true</optional>
		</dependency>
		<dependency>
			<groupId>org.springdoc</groupId>
			<artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
			<version>2.8.0</version>
		</dependency>
		<dependency>
			<groupId>org.json</groupId>
			<artifactId>json</artifactId>
			<version>20240303</version>
		</dependency>

		<!-- ====================== -->
		<!-- TEMPLATING -->
		<!-- ====================== -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-thymeleaf</artifactId>
		</dependency>

		<!-- ====================== -->
		<!-- DEVELOPMENT -->
		<!-- ====================== -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<optional>true</optional>
		</dependency>

		<!-- ====================== -->
		<!-- TESTING -->
		<!-- ====================== -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.security</groupId>
			<artifactId>spring-security-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
				<configuration>
					<excludes>
						<exclude>
							<groupId>org.projectlombok</groupId>
							<artifactId>lombok</artifactId>
						</exclude>
					</excludes>
				</configuration>
			</plugin>
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-compiler-plugin</artifactId>
				<configuration>
					<annotationProcessorPaths>
						<path>
							<groupId>org.projectlombok</groupId>
							<artifactId>lombok</artifactId>
						</path>
					</annotationProcessorPaths>
				</configuration>
			</plugin>
		</plugins>
	</build>
</project>
```

---

### <a id="📄-postman-collection-guide-md"></a>📄 `POSTMAN_COLLECTION_GUIDE.md`

**File Info:**
- **Size**: 9.34 KB
- **Extension**: `.md`
- **Language**: `text`
- **Location**: `POSTMAN_COLLECTION_GUIDE.md`
- **Relative Path**: `root`
- **Created**: 2026-01-26 00:29:42 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-26 00:12:13 (Asia/Calcutta / GMT+06:30)
- **MD5**: `0e6df5c9b3b6373ab811db955b01b3df`
- **SHA256**: `de2db680dce2a3f492afdc48b8f8a6136f223cfbea146de0bd54ba3c9c28db9f`
- **Encoding**: UTF-8

**File code content:**

````markdown
# 🚗 ParkEase API - Postman Collection Guide

## 📋 Overview

This comprehensive Postman collection provides complete access to all ParkEase backend APIs for testing and development.

**Collection File:** `ParkEase_Postman_Collection.json`

---

## 🚀 Quick Start

### 1. Import Collection

1. Open Postman
2. Click **Import** button
3. Select `ParkEase_Postman_Collection.json`
4. Collection will appear in your sidebar

### 2. Configure Environment

The collection uses two variables:

| Variable | Value | Description |
|----------|-------|-------------|
| `base_url` | `http://localhost:8080/api` | Backend API base URL |
| `token` | (auto-filled) | JWT authentication token |

**Note:** The `token` variable is **automatically filled** when you login successfully!

### 3. First Steps

1. **Start Backend Server** (if not running):
   ~~~~bash
   cd backend
   ./mvnw spring-boot:run
   ~~~~

2. **Login to get token**:
   - Go to **🔐 Authentication** → **Login as Admin**
   - Click **Send**
   - Token will auto-save to `{{token}}` variable
   - All authenticated requests will now work!

---

## 📚 Collection Structure

### 🔐 Authentication (7 Endpoints)

| Endpoint | Method | Description |
|----------|--------|-------------|
| Register New User | POST | Create new user account |
| Login | POST | Login + auto-save token |
| Login as Admin | POST | Login as admin + auto-save token |
| Forgot Password | POST | Request password reset |
| Reset Password | POST | Reset password with token |
| Get User Profile | GET | Get current user info |
| Update Profile | PUT | Update user profile |

**Demo Credentials:**
~~~~
Admin:
  Email: admin@parkease.com
  Password: password123

Regular User:
  Email: user@example.com
  Password: password123
~~~~

---

### 👤 User Operations (9 Endpoints)

#### Parking Zones
- **Get Parking Zones**: List all zones
- **Get Zones by Location**: Filter zones by location
- **Get Slots by Zone Name**: Get slots using zone name

#### Slots & Pricing
- **Get Available Slots by Zone**: List available slots
- **Calculate Price**: Calculate parking cost by vehicle type and hours

#### Reservations
- **Create Reservation**: Book a parking slot
- **Get My Reservations**: View current reservations
- **Get History**: View booking history
- **Cancel Reservation**: Cancel a booking

**Example: Create Reservation**
~~~~json
{
    "slotId": 1,
    "startTime": "2026-01-26T10:00:00",
    "endTime": "2026-01-26T12:00:00",
    "vehicleType": "HATCHBACK",
    "vehicleNumber": "KA01AB1234"
}
~~~~

**Vehicle Types:** `TWO_WHEELER`, `HATCHBACK`, `SEDAN`, `SUV`

---

### 👨‍💼 Admin - Zones (4 Endpoints)

**Requires:** Admin role + JWT token

- **Get All Zones (Admin)**: List all zones with details
- **Create Parking Zone**: Add new parking zone
- **Update Zone**: Modify zone details
- **Delete Zone**: Remove a zone

**Example: Create Zone**
~~~~json
{
    "name": "North Parking",
    "location": "North Zone",
    "totalSlots": 50,
    "active": true
}
~~~~

---

### 👨‍💼 Admin - Slots (3 Endpoints)

**Requires:** Admin role + JWT token

- **Get Slots by Zone**: List all slots in a zone
- **Create Slot**: Add new slot (auto-generates QR code)
- **Update Slot Status**: Change slot status

**Slot Status Values:** `AVAILABLE`, `OCCUPIED`, `RESERVED`, `MAINTENANCE`

---

### 👨‍💼 Admin - Pricing (2 Endpoints)

**Requires:** Admin role + JWT token

- **Get All Prices**: List all vehicle type prices
- **Update Price**: Modify pricing for vehicle types

---

### 👨‍💼 Admin - Analytics (1 Endpoint)

**Requires:** Admin role + JWT token

- **Get Reports**: Comprehensive analytics including:
  - Total users
  - Total reservations
  - Active reservations
  - Revenue statistics
  - Occupancy rate

---

### 💳 Demo Payment (7 Endpoints)

**No authentication required** - Demo mode for testing

| Endpoint | Purpose |
|----------|---------|
| Get Payment Mode | Check if demo mode is enabled |
| Get Demo Instructions | Get payment testing instructions |
| Create Demo Order | Generate demo payment order |
| Verify Demo Payment | Verify demo payment completion |
| Get Payment Status | Check payment status |
| Get Demo Receipt | Generate payment receipt |
| Simulate Payment Webhook | Test webhook integration |

**Example Workflow:**
1. Create Demo Order → Get `orderId`
2. Verify Demo Payment → Use `orderId` and `paymentId`
3. Get Demo Receipt → Retrieve receipt

---

### 🏥 Health & Diagnostics (2 Endpoints)

- **Health Check**: Backend health status (may require auth)
- **API Info**: Application information

---

## 🎯 Common Use Cases

### Use Case 1: User Books a Parking Slot

~~~~
1. POST /auth/login
   → Save token

2. GET /user/zones
   → Get zone ID

3. GET /user/slots?zoneId=1
   → Find available slot

4. GET /user/price?vehicleType=HATCHBACK&hours=2
   → Calculate cost

5. POST /user/reserve
   → Create reservation

6. POST /payment/demo/create-order
   → Process payment

7. POST /payment/demo/verify
   → Confirm payment
~~~~

### Use Case 2: Admin Manages Parking Zones

~~~~
1. POST /auth/login (admin credentials)
   → Save admin token

2. GET /admin/zones
   → View all zones

3. POST /admin/zone
   → Create new zone

4. POST /admin/slots/{zoneId}
   → Add slots to zone

5. PUT /admin/pricing/1
   → Update pricing

6. GET /admin/reports
   → View analytics
~~~~

---

## 🔑 Authentication Guide

### How Token Auto-Save Works

The **Login** and **Login as Admin** requests include a **Test Script** that automatically saves the JWT token:

~~~~javascript
if (pm.response.code === 200) {
    const jsonData = pm.response.json();
    if (jsonData.token) {
        pm.collectionVariables.set('token', jsonData.token);
        console.log('✅ Token saved');
    }
}
~~~~

### Manual Token Setup (if needed)

1. Send login request
2. Copy the `token` from response
3. Go to Collection → Variables
4. Paste token into `token` variable
5. Save

### Using Token in Requests

All authenticated endpoints include this header:
~~~~
Authorization: Bearer {{token}}
~~~~

The `{{token}}` variable is automatically replaced with your JWT token.

---

## 🧪 Testing Tips

### 1. Sequential Testing
Use the Postman **Collection Runner** to run multiple requests in sequence.

### 2. Environment Switching
Create different environments for:
- Local: `http://localhost:8080/api`
- Development: `http://dev.parkease.com/api`
- Production: `http://api.parkease.com/api`

### 3. Check Response Times
Monitor API performance in the **Tests** tab.

### 4. Save Example Responses
Click **Save Response** to document expected outputs.

---

## 🐛 Troubleshooting

### 401 Unauthorized
- **Solution**: Login again to refresh token
- Check if token is expired (24 hours validity)

### 403 Forbidden
- **Solution**: Ensure you're using admin credentials for admin endpoints
- Verify user role in profile response

### 400 Bad Request
- **Solution**: Check request body format matches examples
- Verify all required fields are present
- Check date format: `YYYY-MM-DDTHH:mm:ss`

### 404 Not Found
- **Solution**: Verify the resource ID exists
- Check if base_url is correct

### Connection Refused
- **Solution**: Ensure backend server is running
- Check port 8080 is accessible
- Verify `base_url` variable

---

## 📊 Response Codes

| Code | Meaning | Action |
|------|---------|--------|
| 200 | Success | Request completed successfully |
| 201 | Created | Resource created successfully |
| 400 | Bad Request | Check request payload |
| 401 | Unauthorized | Login to get valid token |
| 403 | Forbidden | Check user permissions |
| 404 | Not Found | Verify resource ID |
| 500 | Server Error | Check backend logs |

---

## 🔄 API Updates

**Last Updated:** January 26, 2026

### What's New:
- ✅ Comprehensive 45+ endpoint collection
- ✅ Auto token-saving on login
- ✅ Complete demo payment flow
- ✅ Admin analytics endpoints
- ✅ Detailed descriptions for all endpoints
- ✅ Example request bodies
- ✅ Query parameter documentation

---

## 📞 Support

For backend issues or questions:
1. Check backend console logs
2. Review `logs/parkease.log`
3. Check Swagger UI: `http://localhost:8080/swagger-ui.html` (if accessible)
4. Review API documentation in backend README.md

---

## 🎓 Learning Resources

### Postman Features to Explore:
- **Collection Runner**: Test multiple requests
- **Environments**: Switch between dev/prod
- **Tests Tab**: Write automated assertions
- **Pre-request Scripts**: Setup before requests
- **Documentation**: Auto-generate API docs

### Example Test Script:
~~~~javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response has token", function () {
    pm.expect(pm.response.json()).to.have.property('token');
});
~~~~

---

## ✅ Checklist

Before sharing with team:
- [ ] Backend server is running
- [ ] Database is connected
- [ ] Login works and token saves
- [ ] Admin endpoints tested
- [ ] User endpoints tested
- [ ] Payment flow tested
- [ ] Collection exported and shared

---

**Happy Testing! 🚀**

*ParkEase Team*

````

---

### <a id="📄-readme-md"></a>📄 `README.md`

**File Info:**
- **Size**: 6.89 KB
- **Extension**: `.md`
- **Language**: `text`
- **Location**: `README.md`
- **Relative Path**: `root`
- **Created**: 2026-01-26 00:29:42 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-01-27 07:47:38 (Asia/Calcutta / GMT+06:30)
- **MD5**: `1ef08fa5725bc2682121b328bf6c9691`
- **SHA256**: `c1b7d840d6fe1627ddb18ff975c1b362ea247730410384d02b3d20d66c7606b4`
- **Encoding**: UTF-8

**File code content:**

````markdown
# 🚗 ParkEase – Smart Parking Reservation System

[![Java](https://img.shields.io/badge/Java-21-orange?logo=openjdk)](https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen?logo=springboot)](https://spring.io/projects/spring-boot)
[![Spring Security](https://img.shields.io/badge/Security-Spring%20Security%20%2B%20JWT-red?logo=springsecurity)](https://spring.io/projects/spring-security)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14-blue?logo=postgresql)](https://www.postgresql.org/)
[![WebSocket](https://img.shields.io/badge/Realtime-WebSocket-yellow)](https://docs.spring.io/spring-framework/reference/web/websocket.html)
[![Swagger](https://img.shields.io/badge/API-Swagger%20%2F%20OpenAPI-85EA2D?logo=swagger)](https://swagger.io/)

---

## 📋 Project Overview

**ParkEase** is a full‑stack smart parking reservation system built with **Spring Boot (Java 21)** and **PostgreSQL**, featuring secure authentication, real‑time slot updates, QR‑based slot identification, pricing management, reservations, demo payments, and an admin analytics dashboard.

The backend follows a layered architecture (Controller → Service → Repository) with DTO mapping, JWT‑based security, schedulers for reservation expiry, Redis support, and WebSocket notifications.
The frontend (React + Vite + Tailwind) provides Admin and User dashboards integrated with these APIs.

---

## ✨ Core Backend Features

### 🔐 Authentication & User Management

* JWT‑based stateless authentication (Spring Security + custom JWT filter)
* User Registration & Login
* Forgot / Reset Password flow
* Profile update APIs
* Role‑based access control (**ADMIN**, **USER**)

### 🚗 Parking Zones & Slots

* Create / update / delete Parking Zones
* Slot configuration and availability management
* Slot status tracking using `SlotStatus` enum
* Automatic **QR Code generation** for every slot (stored as PNG)

### 📅 Reservation System

* Slot reservation with availability checks
* Reservation lifecycle: `PENDING`, `COMPLETED`, `CANCELLED`, `EXPIRED`
* Reservation history per user
* Automatic expiry handled by **ReservationExpiryScheduler**

### 💳 Payment (Demo Integration)

* Demo payment initiation & transaction persistence
* Payment status tracking via `PaymentTransaction`
* Webhook‑style endpoint to receive mock payment updates

### 🚙 Vehicle Management

* Vehicle entity with type support (`VehicleType` enum)
* Vehicle registration linked to users

### 💰 Pricing Module

* Base pricing management
* Dynamic pricing calculation service
* Admin APIs to update rates

### 📊 Admin Analytics

* Dashboard statistics API:

  * Total users
  * Total reservations
  * Active reservations
  * Occupancy rate
  * Revenue summaries

### 🔔 Real‑time Updates

* WebSocket configuration for:

  * Slot status updates
  * Reservation updates

### 🛠️ Technical Highlights

* Global exception handling (`GlobalExceptionHandler`)
* DTO mappers for clean API responses
* JPA Specifications for advanced reservation filtering
* Seeders for demo data, roles, and admin user

---

## 🏗️ Backend Tech Stack

| Category  | Technology                     |
| --------- | ------------------------------ |
| Language  | Java 21                        |
| Framework | Spring Boot 3.x                |
| Security  | Spring Security + JWT          |
| Database  | PostgreSQL 14+                 |
| Realtime  | Spring WebSocket               |
| ORM       | Spring Data JPA                |
| QR Code   | Google ZXing                   |
| API Docs  | SpringDoc OpenAPI (Swagger UI) |
| Scheduler | Spring Task Scheduler          |
| Build     | Maven                          |

---

## 🚀 Backend Setup & Run

### Prerequisites

* Java 21
* PostgreSQL
* Maven

### Run Locally

~~~~bash
./mvnw clean install
./mvnw spring-boot:run
~~~~

Server starts at:

~~~~
http://localhost:8080
~~~~

---

## 📚 API Documentation

After running the backend:

* Swagger UI:
  `http://localhost:8080/swagger-ui.html`

* OpenAPI JSON:
  `http://localhost:8080/v3/api-docs`

---

## 📮 Postman Collection

A ready Postman collection is included:

* `ParkEase_Postman_Collection.json`

Steps:

1. Import into Postman
2. Set environment variable:

   * `base_url = http://localhost:8080`
3. After login, copy JWT token and set:

   * `token = <your_jwt_here>`

---

## 🔮 Future Scope Roadmap (Backend)

* [ ] Real payment gateway integration (Stripe / Razorpay / PayMob)
* [ ] Notification service (Email / SMS)
* [ ] Slot auto‑release on checkout
* [ ] Multi‑city / multi‑branch support
* [ ] Microservices split
* [ ] Kubernetes deployment

---

# 🌐 Frontend (React + Vite) – Reference

The frontend is a separate React application built using **Vite + Tailwind CSS** with role‑based dashboards.

## 🖥️ Frontend Tech Stack

* React 18
* Vite
* Tailwind CSS
* React Router
* Axios
* Recharts (Analytics & charts)(under development)

---

## 📂 Frontend Structure (Highlights)

### 🔐 Auth

* `Login.jsx`
* `Register.jsx`

### 👤 User Dashboard

* `Dashboard.jsx`
* `ParkingSearch.jsx`
* `BookingForm.jsx`
* `Reservations.jsx`
* `History.jsx`
* `Payment.jsx`
* `Receipt.jsx`
* `DemoPayment.jsx`

### 🛠️ Admin Panel

* `AdminDashboard.jsx`
* `ManageZones.jsx`
* `ManageSlots.jsx`
* `PricingManager.jsx`
* `UserManagement.jsx`
* `Analytics.jsx`

### 🔧 Services Layer

* `api.js` – Axios base configuration
* `auth.js` – Auth APIs
* `admin.js` – Admin APIs
* `parking.js` – Parking & slot APIs
* `reservation.js` – Reservation APIs
* `health.js` – Backend health check
* `notification.js` – WebSocket / notification hooks

---

## ▶️ Run Frontend

~~~~bash
npm install
npm run dev
~~~~

Frontend runs at:

~~~~
http://localhost:5173
~~~~

Make sure backend is running at `http://localhost:8080` and update API base URL in:

~~~~js
// src/services/api.js
export const API_BASE_URL = "http://localhost:8080";
~~~~

---

## 🔗 Frontend–Backend Integration

* JWT token stored in AuthContext
* All protected APIs send `Authorization: Bearer <token>`
* Admin routes guarded using role checks
* Analytics & dashboard charts consume `/admin/analytics` and `/admin/stats`
* Reservation & slot updates can be extended using WebSocket endpoints

---

## 👨‍💻 Author & Project Notes

This project is designed as a **final‑year / enterprise‑style full‑stack system** demonstrating:

* Secure authentication
* Real‑time updates
* Clean backend architecture
* Modern React admin & user dashboards

---

⭐ If you like this project, consider starring the repository and extending it with real payments, notifications, and mobile apps.

````

---

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `mvnw`

