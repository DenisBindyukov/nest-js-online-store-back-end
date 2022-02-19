import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductModel } from "./product.model";


@Controller("product")
export class ProductController {

  @Post("create")
  //Omit позволяет указать что именно Не учитывать при приняти dto в параметрах запроса
  async create(@Body() dto: Omit<ProductModel, "_id">) {

  }

  @Get(":id")
  async get(@Param("id") id: string) {

  }

  @Delete(":id")
  async delete(@Param("id") id: string) {

  }

  @Patch("create")

  async patch(@Param("id") id: string, @Body() dto: ProductModel) {

  }
}