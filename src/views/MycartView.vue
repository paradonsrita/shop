<template>
    <v-main>
        <v-container fluid>
      <h3>วิชาที่ฉันลงทะเบียนทั้งหมด</h3>
      {{myEnrollment}}
      <li v-for="(product, index) in myEnrollment" :key="index">
        {{ product.id }}
      </li>
      
</v-container>
    </v-main>
  </template>
  <script setup>

  import { useCart } from "../stores/useCart";
  const enrollmentList = useEnrollment();
  const myEnrollment = enrollmentList.getState;
  </script>
  <style></style>