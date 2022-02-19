import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from "@nestjs/common";
import {  TopPagesModel } from "./top-page.mobel";
import { FindTopPageDto } from "./dto/find-top-page.dto";

@Controller("top-page")
export class ProductController {

  @Post("create")
  //Omit позволяет указать что именно Не учитывать при приняти dto в параметрах запроса
  async create(@Body() dto: Omit<TopPagesModel, "_id">) {
  }

  @Get(":id")
  async get(@Param("id") id: string) {

  }

  @Delete(":id")
  async delete(@Param("id") id: string) {

  }

  @Patch(":id")
  async patch(@Param("id") id: string, @Body() dto: TopPagesModel) {

  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto) {

  }
}