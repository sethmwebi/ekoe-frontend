"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LeaveMessageSchema } from "@/schemas";
import { useForm } from "react-hook-form";

const onSubmit = () => {}

const LeaveMessage = () => {
  const form = useForm({
    resolver: zodResolver(LeaveMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  return (
    <Form className="my-4" {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="font-light">
        <div className="grid md:grid-cols-2 gap-2 md:gap-6 mb-4 md:mb-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="type your message..."
                  {...field}
                  className="resize-none"
                  rows={5}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="mt-4 bg-[#ff6700] hover:bg-[#ff7a20] text-[#f5f5fd]"
        >
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default LeaveMessage;
